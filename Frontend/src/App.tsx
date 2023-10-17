import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { Header } from "./components/Header";
import Swap from "./components/Swap";
import { ConfigProvider } from "antd";

const projectId = "d71c10f9b3878a06112b189dbd818371";

const chains = [mainnet, arbitrum, polygon];
const wagmiConfig = defaultWagmiConfig({ chains, projectId });

// Create modal for wallet integration
createWeb3Modal({ wagmiConfig, projectId, chains });

export default function App() {
  return (
    <div className="h-[100vh] bg-[#090e17]">
      <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
        <WagmiConfig config={wagmiConfig}>
          <Header />
          <Swap />
        </WagmiConfig>
      </ConfigProvider>
    </div>
  );
}
