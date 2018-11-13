import generateSignature from './generateSignature';
import getContractInstance from './getContractInstance'

/**
 * Send the transaction on chain to check in an existing new device
 */
async function registerDeviceOnChain(web3, wallet) {
    // TODO... who is sending the transaction??
    const [sender] = web3.eth.accounts;

    const deviceId = wallet.address;
    const messageToSign = "register";
    const hash = web3.sha3(messageToSign);
    const privateKey = wallet.wallet.getPrivateKey().toString('hex');
    const sig = await generateSignature(hash, privateKey)
    
    const productRegistry = await getContractInstance(web3, 'ProductRegistry');

    // TODO send raw tx!!
    const tx = await productRegistry.registerDevice(hash, sig, deviceId, { from: sender });
    console.log(tx)
}

export default registerDeviceOnChain;