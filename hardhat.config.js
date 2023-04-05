require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: "https://wandering-neat-theorem.matic-testnet.discover.quiknode.pro/b8b1176c5491dcff1da2723342bd3bd45db54175/",
      accounts: ["3d9a75c1a61a2bff38ff6cd3221e5b558997000c716a5553127c97251897cd02"],
    },
    mainnet: {
      chainId: 1,
      url: process.env.PROD_QUICKNODE_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};