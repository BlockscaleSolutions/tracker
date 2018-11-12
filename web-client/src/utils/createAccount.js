const bip39 = require('bip39');
const hdkey = require('ethereumjs-wallet/hdkey');

module.exports = () => {
    const mnemonic = bip39.generateMnemonic();
    const hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));
    const path = "m/44'/60'/0'/0/0";
    const wallet = hdwallet.derivePath(path).getWallet();
    const address = `0x${wallet.getAddress().toString('hex')}`;

    // TODO encrypt and backup perhaps?
    return { wallet, address };
}