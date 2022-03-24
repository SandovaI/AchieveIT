import React from "react";
import { useWeb3React } from "@web3-react/core";
import styles from "./wallet.module.scss";
function ConnectionDisplay() {
  // uses for the web3 library
  const { account } = useWeb3React();
  const walletAddress = "0xAEC1D67a45F056969AF25438cf687f6d3D81FAbf";
  console.log(`${account}`);

  return (
    <p className={styles.address}>
      {walletAddress.substring(0, 6)} ... {walletAddress.substring(38)}
    </p>
  );

  // return <span style={{ margin: 0 }}>Wallet Address: {account}</span>;
}

export default ConnectionDisplay;
