require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note snow common harvest dry equal genius'; 
let testAccounts = [
"0xebe4d19e3b0080bda9f9dd89a51a49303c275d165345c7d02b7d39904eaac266",
"0xa0fd85208e3286d240dcc2910d4e096f8402ff5862cf376689b28cb125bf423a",
"0x68de2d96881ecb06b0d6fe4a983bbc9879f92673a9e06a942ed47dcf6e1bfbde",
"0x68ae58b14506b7f34077a5ae79c4125e483f2124d4f5aeeb7b5d2b1d1932266d",
"0x124c03c3bd4a07ce16e8b0a07b8dffccc71a8fdec57a8047235337046fe1a866",
"0x6c813bb75d45609142b3ba131072dcfcafaace4815e8e2886b423293c4231ba2",
"0x0464a1e0aa502b42b5dbc2d21b244abbe78d9a4c1c177478a78dae2fb2b7e165",
"0x00d4efe9f2e67c59e9a8d5bdc0b55abaa40b026b349438a9c13e86ff794d44ea",
"0x0de08b1b42e5ddac354a7b30d0442b58eb8b6f146af0b2353ecb0d754aab1967",
"0xcab91fe33f8bd3006f9bfc6e6cd4c6f38ce7df94b4693db81d79612ec376f354"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
