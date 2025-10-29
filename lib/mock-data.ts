export interface CryptoData {
  id: number
  symbol: string
  name: string
  price: number
  change: number
  volume: string
  marketCap: string
  favorite: boolean
  high24h: number
  low24h: number
  circulatingSupply: string
  totalSupply: string
  description: string
}

export const mockCryptoData: CryptoData[] = [
  {
    id: 1,
    symbol: "BTC",
    name: "Bitcoin",
    price: 67234.56,
    change: 5.42,
    volume: "28.5B",
    marketCap: "1.32T",
    favorite: true,
    high24h: 68500.0,
    low24h: 65200.0,
    circulatingSupply: "19.5M",
    totalSupply: "21M",
    description:
      "Bitcoin is the first decentralized cryptocurrency. It was created in 2009 by an unknown person using the alias Satoshi Nakamoto. Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain.",
  },
  {
    id: 2,
    symbol: "ETH",
    name: "Ethereum",
    price: 3456.78,
    change: 3.21,
    volume: "15.2B",
    marketCap: "415B",
    favorite: true,
    high24h: 3520.0,
    low24h: 3380.0,
    circulatingSupply: "120M",
    totalSupply: "∞",
    description:
      "Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. It is the second-largest cryptocurrency by market capitalization after Bitcoin.",
  },
  {
    id: 3,
    symbol: "BNB",
    name: "Binance Coin",
    price: 589.23,
    change: -1.45,
    volume: "2.1B",
    marketCap: "88B",
    favorite: false,
    high24h: 598.0,
    low24h: 582.0,
    circulatingSupply: "149M",
    totalSupply: "200M",
    description:
      "Binance Coin is the cryptocurrency issued by the Binance exchange and trades with the BNB symbol. It was initially launched as an ERC-20 token on Ethereum but later migrated to Binance Chain.",
  },
  {
    id: 4,
    symbol: "SOL",
    name: "Solana",
    price: 145.67,
    change: 8.92,
    volume: "3.4B",
    marketCap: "65B",
    favorite: false,
    high24h: 152.0,
    low24h: 138.0,
    circulatingSupply: "446M",
    totalSupply: "∞",
    description:
      "Solana is a high-performance blockchain supporting builders around the world creating crypto apps that scale. It is known for its fast transaction speeds and low costs.",
  },
  {
    id: 5,
    symbol: "XRP",
    name: "Ripple",
    price: 0.6234,
    change: 2.15,
    volume: "1.8B",
    marketCap: "34B",
    favorite: false,
    high24h: 0.64,
    low24h: 0.61,
    circulatingSupply: "54.5B",
    totalSupply: "100B",
    description:
      "XRP is a digital asset built for payments. It is the native digital asset on the XRP Ledger—an open-source, permissionless and decentralized blockchain technology.",
  },
  {
    id: 6,
    symbol: "ADA",
    name: "Cardano",
    price: 0.4567,
    change: -2.34,
    volume: "890M",
    marketCap: "16B",
    favorite: false,
    high24h: 0.47,
    low24h: 0.45,
    circulatingSupply: "35B",
    totalSupply: "45B",
    description:
      "Cardano is a proof-of-stake blockchain platform that says its goal is to allow changemakers, innovators and visionaries to bring about positive global change.",
  },
  {
    id: 7,
    symbol: "DOGE",
    name: "Dogecoin",
    price: 0.0823,
    change: 12.45,
    volume: "1.2B",
    marketCap: "12B",
    favorite: false,
    high24h: 0.085,
    low24h: 0.073,
    circulatingSupply: "146B",
    totalSupply: "∞",
    description:
      "Dogecoin is a cryptocurrency created as a joke based on a popular meme. Despite its satirical nature, it has developed a large community and is used for tipping and charitable donations.",
  },
  {
    id: 8,
    symbol: "MATIC",
    name: "Polygon",
    price: 0.8234,
    change: 4.56,
    volume: "650M",
    marketCap: "7.6B",
    favorite: false,
    high24h: 0.85,
    low24h: 0.79,
    circulatingSupply: "9.2B",
    totalSupply: "10B",
    description:
      "Polygon is a protocol and framework for building and connecting Ethereum-compatible blockchain networks. It aims to address Ethereum's scalability issues.",
  },
  {
    id: 9,
    symbol: "DOT",
    name: "Polkadot",
    price: 6.78,
    change: -0.89,
    volume: "420M",
    marketCap: "9.2B",
    favorite: false,
    high24h: 6.95,
    low24h: 6.65,
    circulatingSupply: "1.36B",
    totalSupply: "∞",
    description:
      "Polkadot is an open-source sharded multichain protocol that connects and secures a network of specialized blockchains, facilitating cross-chain transfer of any data or asset types.",
  },
  {
    id: 10,
    symbol: "AVAX",
    name: "Avalanche",
    price: 34.56,
    change: 6.23,
    volume: "780M",
    marketCap: "13B",
    favorite: false,
    high24h: 35.8,
    low24h: 32.5,
    circulatingSupply: "376M",
    totalSupply: "720M",
    description:
      "Avalanche is a layer one blockchain that functions as a platform for decentralized applications and custom blockchain networks. It is one of Ethereum's rivals.",
  },
]
