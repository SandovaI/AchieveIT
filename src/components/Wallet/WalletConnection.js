import { injected } from "./Connector";
import { useWeb3React } from "@web3-react/core";

function WalletConnection() {
  // uses for the web3 library
  const { activate, deactivate } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (err) {
      console.log(err);
    }
  }

  async function disconnect() {
    try {
      await deactivate();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <button type="button" onClick={connect}>
      Start
    </button>
  );
}
export default WalletConnection;
