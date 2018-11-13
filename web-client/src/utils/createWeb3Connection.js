import Web3 from 'web3';

export default function createWeb3Connection() {
    const apiKey = process.env.REACT_INFURA_API_KEY
    const infuraURL = `https://kovan.infura.io/${apiKey}`;
    
    // const web3 = new Web3(new Web3.providers.HttpProvider(infuraURL));
    const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));

    if (!web3.isConnected()) {
        alert('A connection to the Ethereum blockchain could not be created!  Please try again later...')
    } else {
        return web3
    }
}