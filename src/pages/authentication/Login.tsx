import { useDispatch } from "react-redux";
import { setTokens } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Fade, LinearProgress } from "@mui/material";
import { useSDK } from "@metamask/sdk-react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [account, setAccount] = useState<string>();
  const { sdk } = useSDK();
  const [loading, setLoading] = useState<boolean>(false);
  const chainId = `0x${Number(919).toString(16)}`
  const handleLogin = async () => {
    setLoading(true);
    try {
      const accounts = await sdk?.connect();
      await window.ethereum?.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainId }]
      });
      setAccount((accounts as string[] | undefined)?.[0] ?? "");

      dispatch(
        setTokens({
          accessToken: "access_token",
          refreshToken: "refresh_token",
          idToken: "id_token",
        })
      );
      setLoading(false);
      navigate("/dashboard");
    } catch (err: any) {
      if (err?.code === 4902) {
        console.log('inside')
        await window.ethereum?.request({
          method: "wallet_addEthereumChain",
          params: [{
            chainName: "Mode Testnet", chainId: chainId, 
            blockExplorerUrls: ['https://bridge.mode.network/'],
            rpcUrls: ['https://sepolia.mode.network/'],
             nativeCurrency: {
              name: "Ethereum",
              symbol: "ETH",
              decimals: 18,
            }
          },

          ],
        })
        setLoading(false);
        navigate("/dashboard");
      }
      console.warn(`failed to connect..`, err);
    }

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
            Login with Metamask
          </button>
        </div>
      </Fade>
    </div>
  );
};

export default Login;
