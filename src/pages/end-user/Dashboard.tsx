import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTokens } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { Fade } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {}, []);

  useEffect(() => {
    console.log("dashboard screen");
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Fade in={true} timeout={1000}>
        <div className="flex flex-col h-screen gap-8 pt-12 pl-24 pr-24">
          <h1>Welcome to Mode Start</h1>

<input placeholder="Search for project to fund" className="p-4 rounded-md text-custom-black"></input>
          <div className="flex flex-col gap-12 ">
            <div className="flex justify-between items-end pb-2 border-b-[1px] border-b-secondary-2">
            <h3 className="">New Ideas</h3>
            <button
            className="p-4 rounded-sm bg-primary text-custom-black"
          >
            Publish New Idea
          </button>
            </div>


            <div className="grid grid-cols-3 gap-12">
              <div className="bg-custom-grey h-96"></div>

              <div className="bg-custom-grey h-96"></div>

              <div className="bg-custom-grey h-96"></div>
            </div>
          </div>

        </div>
      </Fade>
    </div>
  );
};

export default Dashboard;
