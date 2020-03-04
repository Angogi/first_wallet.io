const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed()

  await tokenMock.mint(
    '0x267c5d96ac31112D8fe0C81C5Fa90dA60A645aC1',
    '1000000000000000000000'
  )
};
 