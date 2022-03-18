import { useWeb3React } from "@web3-react/core";

function ConnectionDisplay() {
  // uses for the web3 library
  const { account } = useWeb3React();

  return <p>Wallet Address: {account}</p>;
}

export default ConnectionDisplay;
