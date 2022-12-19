// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import fs from 'fs';
import { config, ethers } from 'hardhat';

async function main() {

  const MyToken = await ethers.getContractFactory('MyToken');
  const my_token_contract = await MyToken.deploy();
  await my_token_contract.deployed();
  console.log('MyToken deployed to:', my_token_contract.address);

  const Dex = await ethers.getContractFactory('Dex');
  const dex_contract = await Dex.deploy(my_token_contract.address);
  await dex_contract.deployed();
  console.log('Dex deployed to:', dex_contract.address);
  saveFrontendFiles(
    my_token_contract.address,
    'MyToken',
    dex_contract.address,
    'Dex'
  );
}

function saveFrontendFiles(
  contractAddress: string,
  contractName: string,
  nftContractAddress: string,
  nftContractName: string
) {
  fs.writeFileSync(
    `${config.paths.artifacts}/contracts/contractAddress.ts`,
    `export const ${contractName} = '${contractAddress}'\nexport const ${nftContractName} = '${nftContractAddress}'\n`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
