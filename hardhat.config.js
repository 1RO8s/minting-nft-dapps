require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

console.log("read hardhat.config")
console.log(`ALCHEMY_RINKEBY_URL:${process.env.ALCHEMY_RINKEBY_URL}`)
console.log(`ACCOUNT_PRIVATE_KEY:${process.env.ACCOUNT_PRIVATE_KEY}`)

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_RINKEBY_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    }
  }
};