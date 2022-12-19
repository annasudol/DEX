import { HardhatUserConfig } from 'hardhat/config';
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomiclabs/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades";
import '@nomicfoundation/hardhat-toolbox';

import * as dotenv from "dotenv";

dotenv.config();

const ALCHEMY_PROJECT_ID = process.env.ALCHEMY_PROJECT_ID || '';
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || '';

const MNEMONIC = process.env.MNEMONIC || '';;
const GOERLI_URL = process.env.ALCHEMY_PROJECT_ID ? `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_PROJECT_ID}` : '';

/** @type import('hardhat/config').HardhatUserConfig */
const config: HardhatUserConfig = {
  solidity: '0.8.9',
  paths: {
    artifacts: './frontend/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337, // We set 1337 to make interacting with MetaMask simpler
    },
    goerli: {
      url: GOERLI_URL,
      allowUnlimitedContractSize: true,
      accounts: { mnemonic: MNEMONIC }
    },
  },
  typechain: {
    outDir: './frontend/types/typechain',
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
};

export default config;
