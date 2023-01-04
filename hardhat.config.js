require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: "https://wandering-neat-theorem.matic-testnet.discover.quiknode.pro/b8b1176c5491dcff1da2723342bd3bd45db54175/",
      accounts: ["94ee5bc065142756f77402985cee10543d05bb45744e7701e8286c0f294661a1"],
    }
  }
};