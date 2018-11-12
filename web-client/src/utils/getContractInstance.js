/**
 * Create a reference to a deployed contract
 * @param {Object} web3  The web3 connection
 * @param {String} contractName The name of the contract as defined in the Solidity source file
 */
export default function getContractInstance(web3, contractName) {
    return new Promise((resolve, reject) => {
        const artifiacts = require(`../smart-contracts/build/contracts/${contractName}.json`);

        web3.version.getNetwork((err, networkId) => {
            const address = artifiacts.networks[networkId].address;
            const contract = web3.eth.contract(artifiacts.abi).at(address);
            resolve(contract);
        });
    })
}