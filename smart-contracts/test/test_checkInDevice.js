const ProductRegistry = artifacts.require('./ProductRegistry.sol');
const soliditySha3 = require('../../utils/soliditySha3.js');

let productRegistry;

contract('ProductRegistry.checkInDevice()', (accounts) => {
  before(() => {
    [deviceId] = accounts;
  });

  beforeEach(async () => {
    productRegistry = await ProductRegistry.new();
    
    // Register the device
    const hash = web3.sha3('msg');
    const sig = web3.eth.sign(deviceId, hash);
    await productRegistry.registerDevice(hash, sig);
  });

  it('should successfully checkin a new device', async () => {
    const nonce = (await productRegistry.latestNonce_(deviceId)).toNumber();
    const hash = soliditySha3(['uint256'], [nonce])
    const sig = web3.eth.sign(deviceId, web3.toHex(hash));

    const callRes = await productRegistry.checkInDevice.call(sig, deviceId);
    const res = await productRegistry.checkInDevice(sig, deviceId);

    assert(callRes, 'Call response incorect');

    const nextNonce = (await productRegistry.latestNonce_(deviceId)).toNumber()
    assert.strictEqual(nextNonce, nonce + 1, 'Nonce incorrect');

    // // correct event emitted
    assert.equal(res.logs[0].event, 'DeviceCheckedIn', 'Event not emitted');
    assert.equal(res.logs[0].args.id, deviceId, 'deviceId incorrect');
  });
});