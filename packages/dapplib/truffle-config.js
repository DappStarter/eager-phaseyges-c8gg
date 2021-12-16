require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone strike crouch magic hole just depth fresh giant'; 
let testAccounts = [
"0xf567c6d4582af7cb0402876ba95a744ff884cd74e8d4cd00a2d0426a1c6a394c",
"0x56ce855ac67ac5527c6e03f5bb82e0aab3f932ba6325fb0f05e320d27876b954",
"0xb0265e20e3476085c84eda3186f8513830276e1a30573b2b3c6e0e8996f80a67",
"0x098f6cba857f9550a7590ffc9f5eefb686dc610e99fa86570622dbfa95416642",
"0xf0424cf91611f02759dffb60ab99bdb6921f9f4185ec197469745d30985a046a",
"0x947729abb29c3d8bde411464683308bf687181d0f79fb10986de0f20adbd2d9a",
"0xc5eb48a8e6d42d4d6dfbb0a94a6cd59c1b58ea1a87849a3d197976c3b08138b0",
"0x052737e17e45b0b2d9371824cdf603ab81d6c2f61ff53f6421fa2fd10be957da",
"0xabdea9dbab609658caf1a1ad8101a943a7472f2d1776ed8ffc0ad3e076f58835",
"0xd84513daf9f609c78dc472525fb8fea205bd6565a7f810277d2576c66d7947cb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


