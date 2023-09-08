import "./App.css";
import Layout from "./components/layout/Layout";
import AllRoutes from "./components/AllRoutes";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal, useWeb3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";


const chains = [arbitrum, mainnet, polygon];
const projectId = "5ce21ebc55aba6126be773f451b75f5a";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

function App() {
  const [data, setData] = useState([]);
  const { pathname } = useLocation();
  const handleSearch = async (search) => {
    const tokenAPI = `https://api.dexscreener.com/latest/dex/tokens/${search}`;
    const pairAPI = `https://api.dexscreener.com/latest/dex/search/?q=${search}`;
    let res = await fetch((pathname = "/" ? tokenAPI : pairAPI));
    res = await res.json();
    setData(res.pairs);
  };

  const { open, close } = useWeb3Modal();
  return (
    <WagmiConfig config={wagmiConfig}>
      <Layout>
        <div className="main">
          <div className="connect-btn">
            <button onClick={() => open()}>Connect</button>
          </div>

          <AllRoutes />
        </div>
      </Layout>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </WagmiConfig>
  );
}

export default App;
