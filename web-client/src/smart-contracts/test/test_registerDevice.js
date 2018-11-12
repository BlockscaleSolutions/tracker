const ProductRegistry = artifacts.require('./ProductRegistry.sol');
const generateSignature = require('../../utils/generateSignature.js');
const createAccount = require('../../utils/createAccount.js');

let productRegistry;

contract('ProductRegistry.registerDevice()', (accounts) => {
  before(() => {
    [owner] = accounts;
  });

  beforeEach(async () => {
    productRegistry = await ProductRegistry.new({ from: owner });
  });

  it('should successfully register a new device', async () => {
    const wallet = await createAccount();
    const id = wallet.address;

    const messageToSign = 'register';
    const hash = web3.sha3(messageToSign)
    const privateKey = wallet.wallet.getPrivateKey().toString('hex');
    const sig = await generateSignature(hash, privateKey)
    
    const callRes = await productRegistry.registerDevice.call(hash, sig, id);
    const res = await productRegistry.registerDevice(hash, sig, id);

    assert(callRes, 'Call response incorect');

    // correct event emitted
    assert.equal(res.logs[0].event, 'DeviceRegistered', 'Event not emitted');
    assert.equal(res.logs[0].args.id, id, 'id incorrect');

    const isRegistered = await productRegistry.registeredDevices_(id);
    assert(isRegistered, 'Device not registered');
  });
});