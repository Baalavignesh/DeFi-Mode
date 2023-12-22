import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorPage, Dashboard, Login } from "./pages";
import withAuth from "./HOC/withAuth";
import CoinPage from "./pages/end-user/CoinInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" Component={withAuth(Dashboard)} />
        <Route path="/error" Component={ErrorPage} />
        <Route path="/" Component={Login} />
        <Route path="/coinpage" Component={CoinPage} />
      </Routes>
    </Router>
  );
}

export default App;
