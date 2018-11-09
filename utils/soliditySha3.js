const abi = require('ethereumjs-abi')

// [ "address", "address", "uint", "uint" ],
// [ new BN("43989fb883ba8111221e89123897538475893837", 16), 0, 10000, 1448075779 ]
module.exports = (types, values) => {
    const hash = abi.soliditySHA3(types, values).toString('hex')
    return '0x' + hash
}

