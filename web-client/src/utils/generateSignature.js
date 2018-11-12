const ethUtil = require("ethereumjs-util");

/**
 * Generate a valid signature 
 * @param {Buffer} msgHash 
 * @param {Buffer} privKey 
 * @returns {String}
 */
module.exports = (dataToSign, privateKey) => {
  const msg = Buffer.from(dataToSign.replace("0x", ""), "hex");
  const msgHash = ethUtil.hashPersonalMessage(msg);
  const sgn = ethUtil.ecsign(msgHash, new Buffer(privateKey, 'hex'));
  return ethUtil.toRpcSig(sgn.v, sgn.r, sgn.s);
}