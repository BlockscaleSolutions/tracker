import generateSignature from './generateSignature';
import getContractInstance from './getContractInstance';
import axios from 'axios';

/**
 * Send the transaction on chain to register a new device
 */
async function registerDeviceOnChain(web3, wallet) {
    const TX_SERVICE_URL = process.env.REACT_APP_TX_SERVICE_URL;
    const url = `${TX_SERVICE_URL}/delegateCall`;

    const callData = {
        networkName: 'kovan',
        to: '0xbd5fa4a5df63ab7c1e5f213d7ae91e7cbb24948b',
        method: 'testCall',
        abiMultihash: 'QmaCzFjKWyhMt6eVENksWNGy8vSyU6P95AbA9zoGKXNLgZ'
    }    

    const res = await axios.get(`${TX_SERVICE_URL}/delegateCall/${JSON.stringify(callData)}`);

    console.log(res);

    return; 

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