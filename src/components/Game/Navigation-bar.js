import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.scss";
import logo from "../../logo.svg";
import OrangeTrophy from "../../assets/orange_trophy.png";
import upload from "../../assets/upload.png";
import ConnectionDisplay from "../Wallet/ConnectionDisplay";
import CountdownTimer from "../Countdown/CountdownTimer";

import { Web3ReactProvider } from "@web3-react/core";
import WalletConnection from "../Wallet/WalletConnection";
import Web3 from "web3";

function Navigation() {
  const DAYS = 1 * 24 * 60 * 60 * 1000;
  const NOW = new Date().getTime();
  const dateTimeAfterDays = NOW + DAYS;

  function getLibrary(provider) {
    return new Web3(provider);
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <div className={styles.leftitem}>
          <NavLink to="/">
            <img
              className={styles.headerLogoIcon}
              src={OrangeTrophy}
              alt=""
            ></img>
          </NavLink>
        </div>
        <div className={styles.leftitem}>
          <h1 className={styles.logoText}>AchieveIT</h1>
        </div>
      </div>
      <CountdownTimer
        className={styles.countdown}
        targetDate={dateTimeAfterDays}
      />
      <div className={styles.navitems}>
        <div className={styles.navitem}>
          <NavLink to="/upload">
            <img className={styles.upload} src={upload} alt=""></img>
          </NavLink>
        </div>
        <div className={styles.navitem}>
          {/* <Web3ReactProvider getLibrary={getLibrary}>
            <ConnectionDisplay className={styles.display} />
          </Web3ReactProvider> */}

          <Web3ReactProvider getLibrary={getLibrary}>
            <WalletConnection />
          </Web3ReactProvider>

        </div>
      </div>
    </header>
  );
}
export default Navigation;
