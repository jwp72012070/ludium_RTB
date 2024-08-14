const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const privateKey = '4e77debdba68283f7fa03de48d3a4027604fd294baadff3bbdbfffdf3d2a0300';
const keyPair = ec.keyFromPrivate(privateKey);
const myPublicKey = keyPair.getPublic().encodeCompressed('hex');
console.log('myPublicKey:::',myPublicKey);
