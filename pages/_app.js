import "@/styles/globals.css";
// import { Web3ReactProvider } from "@web3-react/core";
// import { Web3Provider } from "@ethersproject/providers";
import { MoralisProvider } from "react-moralis";

export default function App({ Component, pageProps }) {
  return (
    // FIRST METHOD
    // <Component {...pageProps} />

    // SECOND METHOD
    // const getLibrary = (provider) => {
    //   return new Web3Provider(provider);
    // };
    // <Web3ReactProvider getLibrary={getLibrary}>
    //   <Component {...pageProps} />
    // </Web3ReactProvider>

    // THIRD METHOD
    <MoralisProvider initializeOnMount={false}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}
