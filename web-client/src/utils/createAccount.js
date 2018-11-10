import bip39 from 'bip39';
import hdkey from 'ethereumjs-wallet/hdkey';

function createAccount() {
    const mnemonic = bip39.generateMnemonic();
    const hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));
    const path = "m/44'/60'/0'/0/0";
    const wallet = hdwallet.derivePath(path).getWallet();
    const address = `0x${wallet.getAddress().toString('hex')}`;

    // TODO encrypt and backup perhaps?
    return { mnemonic, wallet, address };
}

export default createAccount