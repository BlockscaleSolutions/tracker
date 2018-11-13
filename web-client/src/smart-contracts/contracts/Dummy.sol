pragma solidity 0.4.24;

contract Dummy {
    uint256 public storedData;

    function testCall() external pure returns (uint256) {
        return 7;
    }

    function testTx(uint256 _x) external returns (bool) {
        storedData = _x;
        return true;
    }
}