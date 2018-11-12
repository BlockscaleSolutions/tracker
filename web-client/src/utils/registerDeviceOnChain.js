import generateSignature from './generateSignature';
import getContractInstance from './getContractInstance'

/**
 * Send the transaction on chain to register a new device
 */
async function registerDeviceOnChain(web3, wallet) {
    console.log('reg')
    console.log('reg')
    console.log('reg')
    
    const [sender] = web3.eth.accounts;

    const deviceId = wallet.address;
    const messageToSign = "register";
    const hash = web3.sha3(messageToSign);
    const privateKey = wallet.wallet.getPrivateKey().toString('hex');
    const sig = await generateSignature(hash, privateKey)
    
    const productRegistry = await getContractInstance(web3, 'ProductRegistry');

    startListening(productRegistry);

    console.log(hash)
    console.log(sig)
    console.log(deviceId)

    // TODO send raw tx!!
    // const tx = await productRegistry.registerDevice(hash, sig, deviceId, { from: sender });

    // console.log(tx)
}

function startListening(productRegistry) {
    productRegistry.DeviceRegistered({}).watch((e, r) => {
        console.log(e)
        console.log(r)
    })
}

export default registerDeviceOnChain;