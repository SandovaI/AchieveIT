import { useWeb3React } from "@web3-react/core";

function ConnectionDisplay() {
  // uses for the web3 library
  const { account } = useWeb3React();

  return <h1>Wallet Address: {account} </h1>;
}

export default ConnectionDisplay;
