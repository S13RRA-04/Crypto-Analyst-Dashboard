export const chainMapping: { [key: string]: string } = {
    ethereum: '0x1',               // Ethereum Mainnet
    bsc: '0x38',                   // Binance Smart Chain
    polygon: '0x89',               // Polygon
    avalanche: '0xa86a',           // Avalanche C-Chain
    fantom: '0xfa',                // Fantom Opera
    arbitrum: '0xa4b1',            // Arbitrum One
    optimism: '0xa',                // Optimism
    harmony: '0x2',                // Harmony
    celo: '0xa4ec',                // Celo
    moonbeam: '0x505',              // Moonbeam
    moonriver: '0x5051',            // Moonriver
    gnosisChain: '0x64',           // Gnosis Chain (formerly xDai)
    arbitrumNova: '0x1a4',         // Arbitrum Nova
    aurora: '0xa4',                // Aurora
    metis: '0x89',                 // Metis Andromeda
    near: '0x86',                  // NEAR Protocol (via Rainbow Bridge)
    ethereumClassic: '0x3',        // Ethereum Classic
    goerli: '0x5',                 // Goerli Testnet (Ethereum)
    ropsten: '0x3',                // Ropsten Testnet (Ethereum)
    rinkeby: '0x4',                // Rinkeby Testnet (Ethereum)
    kovan: '0x2a',                 // Kovan Testnet (Ethereum)
    optimismKovan: '0x7a',         // Optimism Kovan Testnet
    avalancheFuji: '0xaf11',       // Avalanche Fuji C-Chain (Testnet)
    fujiCChain: '0xaf11',          // Fuji C-Chain (Testnet)
    arbitrumRinkeby: '0x7',        // Arbitrum Rinkeby (Testnet)
    binanceSmartChainTestnet: '0x61', // BSC Testnet
    polygonMumbai: '0x13881',      // Polygon Mumbai Testnet
    ethereumRopsten: '0x3',        // Ropsten Testnet (Ethereum)
    celoAlfajores: '0xa4ec',       // Celo Alfajores Testnet
    fuse: '0x7f',                  // Fuse Network
    xdai: '0x64',                  // xDai Chain (Gnosis)
    xDaiRopsten: '0x0',            // xDai Ropsten Testnet
  };
  
  export function getChainHex(chain: string): string {
    return chainMapping[chain.toLowerCase()] || ''; // Default to empty string if chain not found
  }