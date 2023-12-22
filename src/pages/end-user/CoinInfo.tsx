import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
import { Divider, Fade } from "@mui/material";

interface IDonarInformation {
  donor: string | undefined;
  amount: number | undefined;
  address: string | undefined;
}
const CoinPage = () => {
  const { state } = useLocation();
  const scrollRef:any = useRef(null);



  const donorNames = ["John", "Anthony", "Emily", "Sarah", "Michael", "Ram", "Arul Raj", "Eren Yeagar", "Randy John"]; 
  const donorAddresses = [
    "1J6PYEzr4CUoGbnXrELyHszoTSz3wCsCaj",
    "0x4e6CF0ed2c8Abf2316f3B7f2E4e4A989",
    "r3PKWTb7zKfH9zB6N9AshCHP5E7CPkgwdY",
    "Lc6Zq42bUcMW2k8XvF7oF8D7KPEfzjD6vn",
    "1J6PYEzr4CUoGbnXrELyHszoTSz3wCsCaj",
    "r3PKWTb7zKfH9zB6N9AshCHP5E7CPkgwdY",
    "0x4e6CF0ed2c8Abf2316f3B7f2E4e4A989",
    "Lc6Zq42bUcMW2k8XvF7oF8D7KPEfzjD6vn",
    "1J6PYEzr4CUoGbnXrELyHszoTSz3wCsCaj",
  ];

  const [donations, setDonations] = useState<IDonarInformation[]>([]);

  useEffect(() => {
    let intervalId: any;

    if (donations.length < donorNames.length) {
      intervalId = setInterval(() => {
        const donorName = donorNames[donations.length];
        const donorAddress = donorAddresses[donations.length];
        const newDonation: IDonarInformation = {
          donor: donorName,
          amount: Math.floor(Math.random() * 100) + 1000,
          address: donorAddress,
        };

        setDonations((donations) => [...donations, newDonation]);
      }, 2000);

      if (scrollRef.current) {
        const { scrollHeight, clientHeight } = scrollRef.current;
        scrollRef.current.scrollTo(0, scrollHeight - clientHeight);
      }
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [donations.length]);

  useEffect(() => {
    console.log(state);
  }, []);

  useEffect(() => {

  }, [donations]);



  let [progressStyle, setProgressStyle] = useState<any>();
  let [fundingProgress, setFundingProgress] = useState<any>();

  useEffect(() => {
    const fundingProgress = (state.current_funds / state.goal_funds) * 100;
    const progressWidth = fundingProgress > 100 ? 100 : fundingProgress;
    const progressStyle = { width: `${progressWidth}%` };
    setProgressStyle(progressStyle);
    setFundingProgress(fundingProgress);
  }, []);

  return (
    <div>
        
      <Header />
      <Fade in={true} timeout={1000}>

      <div className="ml-24 mr-24">
        <div className="flex ">
          <div className="w-2/5 bg-custom-grey border-r-[1px] border-custom-black rounded-l-lg flex flex-col mt-12 justify-evenly items-center h-[600px]">
            <h1 className="mt-12">{state.name}</h1>
            <p className="font-thin">{state.token}</p>

            <img
              src={state.logo}
              className="w-96 h-96 rounded-full p-4 m-4 animate-pulse"
            ></img>
            <div className="bg-gray-200 rounded-full bg-custom-black w-10/12 mb-12">
              <div
                className="bg-primary text-xs font-medium text-custom-black text-center p-0.5 leading-none rounded-full w-10/12"
                style={progressStyle}
              >
                {fundingProgress}%{" "}
              </div>
            </div>
          </div>
          <div className="w-2/3 bg-custom-grey mt-12 rounded-r-lg h-[600px]">
            <div className="p-12 pb-8 flex flex-col h-full justify-between">
              <h4>{state.description}</h4>

              <div className="bg-custom-black rounded-md p-4 m-6 overflow-scroll scroll-smooth scroll-m-0 overflow-x-hidden h-full" ref={scrollRef}>
                {donations.map((donation, index) => (
                  <div>
                    <Fade in={true} timeout={1000}>
                      <div className="flex justify-between items-center">
                        <h4
                          key={index}
                          className="p-4"
                        >{`${donation.donor} donated $${donation.amount}`}</h4>
                        <p className="font-extralight">{donation.address}</p>
                      </div>
                    </Fade>
                    <Divider />
                  </div>
                ))}
              </div>
              <button className="bg-primary p-4 text-custom-black rounded-md">Contribute Now</button>
            </div>
          </div>
        </div>
        <div className="p-8 flex flex-col justify-center gap-8">
          <h2 className="border-b-[1px] border-b-secondary-2 pt-2">
            Project Explanation
          </h2>
          <h4>{state.longDescription}</h4>
          <h4 className="p-4 bg-custom-grey rounded-lg">
            Our Project Code :{" "}
            <span className="text-secondary-2">
              https://github.com/jokerman/{state.name}
            </span>
          </h4>
          <h4 className="p-4 bg-custom-grey rounded-lg">
            Our Project Explanation :{" "}
            <span className="text-secondary-2">
              https://medium.com/jokerman/{state.name}
            </span>
          </h4>
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default CoinPage;
