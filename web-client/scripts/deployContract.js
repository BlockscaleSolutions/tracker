const TxService = require('blockchain-tx-service-api.js');

console.log(TxService);

const txService = new TxService();

txService.hello();
txService.hello();
txService.hello();

// txService.hello()
// txService.hello()
// txService.hello()

// const pathToContract = '../src/smart-contracts/contracts/ProductRegistry.sol';

// txService.registerContract(pathToContract);