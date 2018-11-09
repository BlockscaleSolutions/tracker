const ProductRegistry = artifacts.require('./ProductRegistry.sol');

let productRegistry;

contract('ProductRegistry.registerDevice()', (accounts) => {
  before(() => {
    [owner] = accounts;
  });

  beforeEach(async () => {
    productRegistry = await ProductRegistry.new({ from: owner });
  });

  it('should successfully register a new device', async () => {
    const msg = 'register';
    const hash = web3.sha3(msg)

    const sig = web3.eth.sign(owner, hash);

    const callRes = await productRegistry.registerDevice.call(hash, sig);
    const res = await productRegistry.registerDevice(hash, sig);

    assert(callRes, 'Call response incorect');

    const isRegistered = await productRegistry.registeredDevices_(owner);
    assert(isRegistered, 'Device not registered');

    // correct event emitted
    assert.equal(res.logs[0].event, 'DeviceRegistered', 'Event not emitted');
    assert.equal(res.logs[0].args.id, owner, 'owner incorrect');
  });
});