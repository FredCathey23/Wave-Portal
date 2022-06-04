require("@nomiclabs/hardhat-waffle");

require("dotenv").config();

//uides/create-task.html

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
   networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/yfto3VBpHKHDbOwgeaQRgFrknrj1rFka",
      accounts: ["e17e0499d96282deacd44cd17f8eae446114632988301562c57ff62db708481e"]
    },
  }, 
};
