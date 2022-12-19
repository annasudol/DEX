
import fs from 'fs';
import { config, ethers } from 'hardhat';

async function main() {
  const my_token_contract = '0x59bBfd37790d01d16E83d4be0E0b0311354463aB'
  const Dex = await ethers.getContractFactory('DEX');
  const dex_contract = await Dex.deploy(my_token_contract);
  await dex_contract.deployed();
  console.log('Dex deployed to:', dex_contract.address);
  saveFrontendFiles(
    dex_contract.address,
    'Dex'
  );
}

function saveFrontendFiles(
  contractAddress: string,
  contractName: string,
) {
  fs.writeFileSync(
    `${config.paths.artifacts}/contracts/contractAddress.ts`,
    `export const ${contractName} = '${contractAddress}'`
  );
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
