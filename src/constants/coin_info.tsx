import ecochain from "../assets/1.png";
import quantumpulse from "../assets/2.png";
import skyledger from "../assets/3.png";


import nebula from "../assets/4.png";
import bit from "../assets/5.png";
import cryptic from "../assets/6.png";

let allCoins = [
  {
    name: "EcoChain",
    logo: ecochain,
    description:
      "EcoChain aims to revolutionize sustainable practices in the blockchain industry, offering a green, energy-efficient approach to decentralized transactions.",
    longDescription:
      "EcoChain is dedicated to creating a sustainable future for blockchain technology. With its innovative approach, it reduces the carbon footprint of cryptocurrency operations, integrating renewable energy sources and eco-friendly protocols to ensure that each transaction contributes to a greener planet. Its commitment to environmental sustainability doesn't compromise performance, promising fast, secure, and efficient transactions in an energy-conscious ecosystem.",
    goal_funds: 100000,
    current_funds: 120000,
    token: "ECH",
    deadline: "12th February 2024",
  },
  {
    name: "QuantumPulse",
    logo: quantumpulse,
    description:
      "QuantumPulse leverages quantum technology to provide unparalleled security and speed in cryptocurrency transactions, heralding a new era of financial technology.",
    longDescription:
      "QuantumPulse represents the cutting edge of cryptocurrency technology, utilizing principles of quantum mechanics to offer a level of security and efficiency previously unimaginable. By harnessing quantum entanglement and superposition, QuantumPulse ensures that transactions are not only faster but fundamentally more secure from the threats of hacking and interference. Its advanced platform is designed for the future of finance, ready to scale and adapt to the ever-evolving digital landscape.",
    goal_funds: 100000,
    current_funds: 23500,
    token: "QPL",
    deadline: "12th February 2024",
  },
  {
    name: "SkyLedger",
    logo: skyledger,
    description:
      "SkyLedger offers an open, decentralized network that promotes freedom and innovation in digital finance, enabling users to soar to new heights of financial autonomy.",
    longDescription:
      "SkyLedger is not just a cryptocurrency; it's a movement towards liberating financial transactions. As a fully decentralized platform, it empowers users with the tools and autonomy to control their financial destiny. With a strong emphasis on user freedom, innovative governance, and a community-driven development approach, SkyLedger is building more than a network; it's fostering an ecosystem where every participant has a voice and the potential to shape the future of finance.",
    goal_funds: 100000,
    current_funds: 76000,
    token: "SKL",
    deadline: "12th February 2024",
  },
];


let newCoins = [
    {
        name: "NebulaNet",
        logo: nebula, 
        description: "NebulaNet is pioneering a constellation of decentralized services, offering a secure and scalable infrastructure for next-generation internet applications.",
        longDescription: "NebulaNet is at the forefront of decentralized internet services, offering a robust and scalable platform that supports a wide range of applications. Its technology is designed to create a more secure, private, and efficient online environment, enabling users to navigate the digital space with confidence. By leveraging advanced cryptography and peer-to-peer technology, NebulaNet is building a future where online interactions are more secure, efficient, and user-centric.",
        goal_funds: 100000,
        current_funds: 79500,
        token: "NEB",
        deadline: "12th February 2024"
    },
    {
        name: "BitTorrential",
        logo: bit,
        description: "BitTorrential is redefining data sharing with a decentralized protocol that accelerates transfer speeds and ensures data integrity.",
        longDescription: "BitTorrential leverages the power of blockchain to revolutionize data sharing and storage. Its decentralized protocol not only accelerates file transfer speeds but also enhances security and data integrity. With a focus on creating a more robust and efficient network, BitTorrential provides a solution that is both user-friendly and powerful, empowering users to share and store data with unprecedented ease and reliability.",
        goal_funds: 100000,
        current_funds: 89000,
        token: "BTT",
        deadline: "12th February 2024"
    },
    {
        name: "CrypticCore",
        logo: cryptic,
        description: "CrypticCore is dedicated to building a more transparent and equitable financial ecosystem, leveraging blockchain to empower users worldwide.",
        longDescription: "CrypticCore is a revolutionary platform that aims to democratize finance through blockchain technology. It is designed to provide a transparent, equitable, and secure financial ecosystem where users have control over their assets and can engage in transactions with confidence. By prioritizing user empowerment, security, and transparency, CrypticCore is setting new standards for what a decentralized financial system can achieve, offering tools and services that make financial freedom accessible to everyone.",
        goal_funds: 100000,
        current_funds: 94700,
        token: "CRC",
        deadline: "12th February 2024"
    }
]


export {allCoins, newCoins} ;
