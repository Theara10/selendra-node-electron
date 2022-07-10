import { ThemeProvider } from "next-themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages";
import Home from "./pages/home";
import Wallet from "./pages/wallet";
import Send from "./pages/wallet/send";
import Receive from "./pages/wallet/receive";
import Connect from "./pages/connect";
import NotFound from "./pages/notfound";
import Settings from "./pages/settings";
import About from "./pages/about";
import Loading from "./components/Loading";
import { useSubstrateState } from "./context/SubstrateContext";
import "./styles/app.css";
import Staking from "./pages/mininode/staking";
import SessionKey from "./pages/validate/sessionkey";
import Bonding from "./pages/validate/bonding";
import WalletHome from "./pages/wallet/home";
import Authorize from "./pages/validate/authorize";
import Validators from "./pages/validate/validators";

export default function App() {
  const { apiState, apiError, keyringState } = useSubstrateState();

  if (apiState !== "READY") {
    return <Loading />;
  }
  if (keyringState !== "READY") {
    return <Loading />;
  }
  if (apiError === "ERROR") {
    return <Loading error />;
  }

  return (
    <ThemeProvider enableSystem={false}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="connect" element={<Connect />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="wallet/home" element={<WalletHome />} />
          <Route path="wallet/send" element={<Send />} />
          <Route path="wallet/receive" element={<Receive />} />
          <Route path="about" element={<About />} />
          <Route path="home" element={<Home />} />
          <Route path="bridge" element={<NotFound />} />
          <Route path="settings" element={<Settings />} />
          <Route path="stake" element={<Staking />} />
          <Route path="validate/sessionkey" element={<SessionKey />} />
          <Route path="validate/bonding" element={<Bonding />} />
          <Route path="validate/authorize" element={<Authorize />} />
          <Route path="validate/validators" element={<Validators />} />
          <Route path="/under-development" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
