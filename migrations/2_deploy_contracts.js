const VinoRouter = artifacts.require("VinoRouter");

const { config } = require('./migration-config');

module.exports = function (deployer, network, accounts) {
    //constructor(address _factory, address _WETH) public {
    deployer.deploy(VinoRouter, config[network].factoryAddress, config[network].WBNBAddress);
};