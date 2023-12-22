import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fade, Grow } from "@mui/material";
import Header from "../../components/Header";
import {allCoins, newCoins} from "../../constants/coin_info";
import {ethers} from "ethers";
import abi from '../../constants/abi.json'

const contractAddress = "0x1EcEEcB17762FaaCf67276b52B00c456017762e3";


const Dashboard = () => {
  const navigate = useNavigate();
  const [currentAd, setCurrentAd] = useState("Hello World!");
 const [currentBid, setCurrentBid] = useState(0);
 const [advertiser, setAdvertiser] = useState("0x0");
 const [newAd, setNewAd] = useState("");
 const [bidAmount, setBidAmount] = useState("");
 const [provider, setProvider] = useState<any>(null);
 const [status, setStatus] = useState("");
 const contract = new ethers.Contract(contractAddress, abi, provider);

 async function fetchCurrentAd() {
  try {
      const provider = window.ethereum ? new ethers.BrowserProvider(window.ethereum) : null;
      console.log(provider)
      const adData = await contract.getAllCampaigns();
      
      setCurrentAd(adData[0]);
      setAdvertiser(adData[1]);
      setCurrentBid(parseFloat(ethers.formatEther(adData[2])));
      console.log(adData[0]);
  } catch (error) {
    console.error('Error fetching current ad:', error);
  }
}

useEffect(() => {
  if (typeof window !== "undefined") {
    if (window.ethereum) {
      setProvider(new ethers.BrowserProvider(window.ethereum));
      // getCurrentAd()
    } else {
      console.error("Please install MetaMask!");
    }
  }
}, []);
useEffect(() => {
  fetchCurrentAd();
}, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Fade in={true} timeout={1000}>
        <div className="flex flex-col h-screen gap-8 pt-12 pl-24 pr-24">
          <h1>Welcome to Mode Start</h1>

          <input
            placeholder="Search for project to fund"
            className="p-4 rounded-md text-custom-black"
          ></input>
          <div className="flex flex-col gap-12 ">
            <div className="flex justify-between items-end pb-2 border-b-[1px] border-b-secondary-2">
              <h3 className="">New Ideas</h3>
              <button className="p-4 rounded-sm bg-primary text-custom-black">
                Publish New Idea
              </button>
            </div>

            <div className="grid grid-cols-3 gap-12">
              {allCoins.map((coin:any) => {
                const fundingProgress =
                  (coin.current_funds / coin.goal_funds) * 100;
                const progressWidth =
                  fundingProgress > 100 ? 100 : fundingProgress;
                const progressStyle = { width: `${progressWidth}%` };

                return (
                  <Grow
                    key = {coin.name}
                    in={true}
                    style={{
                      transformOrigin: "0 0 0",
                    }}
                    {...(true ? { timeout: 1000 } : {})}
                  >
                    <div className="bg-custom-grey flex flex-col items-center p-6 justify-between cursor-pointer" onClick={() => navigate("/coinpage", {state: coin})}>
                      <img
                        src={coin.logo}
                        className="w-40 h-40 rounded-full p-4 m-4"
                      ></img>
                      <h3>{coin.name}</h3>
                      <p className="font-thin">{coin.token}</p>

                      <p className="text-center mt-8">{coin.description}</p>
                      <div className="bg-gray-200 rounded-full bg-custom-black w-10/12 mt-10">
                        <div
                          className="bg-primary text-xs font-medium text-custom-black text-center p-0.5 leading-none rounded-full w-10/12"
                          style={progressStyle}
                        >
                          {fundingProgress.toFixed(2)}%
                        </div>
                      </div>
                    </div>
                  </Grow>
                );
              })}
            </div>
          </div>


          <div className="flex flex-col gap-12 pb-12">
            <div className="flex justify-between items-end pb-2 border-b-[1px] border-b-secondary-2">
              <h3 className="">Popular Ideas - Raising funds quickly</h3>
            </div>

            <div className="grid grid-cols-3 gap-12">
              {newCoins.map((coin:any) => {
                const fundingProgress =
                  (coin.current_funds / coin.goal_funds) * 100;
                const progressWidth =
                  fundingProgress > 100 ? 100 : fundingProgress;
                const progressStyle = { width: `${progressWidth}%` };

                return (
                  <Grow
                    in={true}
                    style={{
                      transformOrigin: "0 0 0",
                    }}
                    {...(true ? { timeout: 1000 } : {})}
                  >
                    <div className="bg-custom-grey flex flex-col items-center p-6 justify-between cursor-pointer" onClick={() => navigate("/coinpage", {state: coin})}>
                      <img
                        src={coin.logo}
                        className="w-40 h-40 rounded-full p-4 m-4"
                      ></img>
                      <h3>{coin.name}</h3>
                      <p className="font-thin">{coin.token}</p>

                      <p className="text-center mt-8">{coin.description}</p>
                      <div className="bg-gray-200 rounded-full bg-custom-black w-10/12 mt-10">
                        <div
                          className="bg-primary text-xs font-medium text-custom-black text-center p-0.5 leading-none rounded-full w-10/12"
                          style={progressStyle}
                        >
                          {fundingProgress.toFixed(2)}%
                        </div>
                      </div>
                    </div>
                  </Grow>
                );
              })}
            </div>
            
              
          </div>
          <footer className="bg-primary  w-full">
              <div x-data="{}"
    x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })" className="text-custom-black animate-infinite-scroll [&_li]:mx-8 [&_img]:max-w-none  w-max">This website is designed to showcase the application's features and layout. The information provided is intended to illustrate potential functionalities and user interactions</div>
          </footer> 
        </div>
      
      </Fade>
      
    </div>
  );
};

export default Dashboard;
