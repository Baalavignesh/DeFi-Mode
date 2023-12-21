import { useDispatch } from "react-redux";
import { setTokens } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Fade, LinearProgress } from "@mui/material";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const handleLogin = () => {
    console.log("set");
    dispatch(
      setTokens({
        accessToken: "access_token",
        refreshToken: "refresh_token",
        idToken: "id_token",
      })
    );
    navigate("/dashboard");
  };

  useEffect(() => {
    console.log("login screen");
  }, []);





  return (
    <div className="min-h-screen">

      <Fade in={true} timeout={1000}>
        <div className="flex flex-col justify-center items-center h-screen gap-8">


          <h1>Welcome to ModeStart</h1>
          <button
            className="p-4 rounded-sm bg-primary text-custom-black"
            onClick={handleLogin}
          >
            Login with ETH Auth
          </button>
        </div>
      </Fade>
    </div>
  );
};

export default Login;
