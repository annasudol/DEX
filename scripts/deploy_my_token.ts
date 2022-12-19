
import fs from 'fs';
import { config, ethers } from 'hardhat';

async function main() {
    const MyToken = await ethers.getContractFactory('MyToken');
    const my_token_contract = await MyToken.deploy();
    await my_token_contract.deployed();
    console.log('MyToken deployed to:', my_token_contract.address);
    saveFrontendFiles(
        my_token_contract.address,
        'MyToken',
    );
}
//0x59bBfd37790d01d16E83d4be0E0b0311354463aB
// npx hardhat verify 0x59bBfd37790d01d16E83d4be0E0b0311354463aB --network goerli
function saveFrontendFiles(
    contractAddress: string,
    contractName: string,
) {
    fs.writeFileSync(
        `${config.paths.artifacts}/contracts/contractAddress.ts`,
        `export const ${contractName} = '${contractAddress}'`
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
