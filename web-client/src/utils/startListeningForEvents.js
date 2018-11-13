import getContractInstance from './getContractInstance'

/**
    @param {Object} web3 connection
    @param {String} contractName name of the contract as defined in the source file
    @param {String} eventName name of the event to listen for
    @param {Object} blockFilter the block range to watch over
 */
async function startListeningForEvents(web3, contractNames, eventNames, blockFilter={ fromBlock: 'latest', toBlock: 'latest' }) {
    let contract;

    for (let i = 0; i<contractNames.length; i+=1) {
        contract = await getContractInstance(web3, contractNames[i]);

        contract[eventNames[i]](blockFilter).watch((e, r) => {
            console.log(e)
            console.log(r)
        })
    }
}

export default startListeningForEvents;