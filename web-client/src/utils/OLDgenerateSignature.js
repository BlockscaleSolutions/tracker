const ethUtil = require('ethereumjs-util');

/**
 * Generate a valid signature 
 * @param {Buffer} msgHash 
 * @param {Buffer} privKey 
 * @returns {String}
 */
module.exports = (msgHash, privateKey) => {

    console.log('2nd hash ' + msgHash.toString('hex'))

    var signature = ethUtil.ecsign(msgHash, new Buffer(privateKey, 'hex')); 
    var signatureRPC = ethUtil.toRpcSig(signature.v, signature.r, signature.s)

    console.log(signatureRPC);

    return signatureRPC






    // console.log(`sig hash: ${msgHash.toString('hex')}`)

    // const msgSig = ethUtil.ecsign(msgHash, privKey)
    
    // // Convert to hex string
    // let sig = (ethUtil.bufferToHex(msgSig.r)).replace('0x', '')
    // sig += (ethUtil.bufferToHex(msgSig.s)).replace('0x', '')
    // sig += (ethUtil.bufferToHex(msgSig.v)).replace('0x', '')

    // // Convert to hex string
    // // sig = sig.slice(2)

    // console.log('r: ' + (ethUtil.bufferToHex(msgSig.r)).replace('0x', ''))
    // console.log('s: ' + (ethUtil.bufferToHex(msgSig.s)).replace('0x', ''))
    // console.log('v: ' + (ethUtil.bufferToHex(msgSig.v)).replace('0x', ''))
    

    // return sig;
}