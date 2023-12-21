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
          <div className="flex flex-col justify-center items-center h-screen gap-8">
            <h1>Dashboard Screen</h1>
            <button
              className="p-4 rounded-sm bg-primary text-custom-black"
              onClick={handleLogout}
            >
              Remove Access Token
            </button>
          </div>
        </Fade>
      </div>
  );
};

export default Dashboard;
