pragma solidity 0.4.24;

import "./ECDSA.sol";


contract ProductRegistry {
    mapping(address => bool) public registeredDevices_;
    
    // Protection against device check in replay attacks
    mapping(address => uint256) public latestNonce_;

    event DeviceCheckedIn(address id);
    event DeviceRegistered(address id);

    /**
        Registering a mobile device or any device that is capable of creating digital signatures
        A signature will be generated on the device and broadcast to this function
        The address will be recovered from the sig and that will be the ID for the given product
     */
    function registerDevice(bytes32 _hash, bytes _sig) external returns(bool) {
        address id = ECDSA.recover(_hash, _sig);

        require(!registeredDevices_[id], "Device is already registered");
        registeredDevices_[id] = true;

        emit DeviceRegistered(id);
        return true;
    }

    event Test(bytes32 hash);

    /**
        Verify the signature of a device that has been checked in
     */
    function checkInDevice(
        bytes _sig, 
        address _signer
    ) external returns (bool) {
        // Need to generate the hash and use the latest nonce to compare with the signature
        // To eliminate past signatures being replayed
        uint256 nonce = latestNonce_[_signer];
        bytes32 hash = keccak256(nonce);

        address id = ECDSA.recover(hash, _sig);
        
        require(id == _signer, "Signature is not valid.");
        require(registeredDevices_[id], "Device is not registered");

        latestNonce_[_signer]++;
        emit DeviceCheckedIn(id);

        return true;
    }
}