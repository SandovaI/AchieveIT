import { useWeb3React } from "@web3-react/core";

function ConnectionDisplay() {
  // uses for the web3 library
  const { account } = useWeb3React();

  return <span>Wallet Address: {account}</span>;
}

export default ConnectionDisplay;
