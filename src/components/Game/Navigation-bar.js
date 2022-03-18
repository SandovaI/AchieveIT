import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.scss";
import logo from "../../logo.svg";
import upload from "../../assets/upload.png";
import WalletConnection from "../Wallet/WalletConnection";
import ConnectionDisplay from "../Wallet/ConnectionDisplay";
import CountdownTimer from "../Countdown/CountdownTimer";
function Navigation() {
  const DAYS = 1 * 24 * 60 * 60 * 1000;
  const NOW = new Date().getTime();
  const dateTimeAfterDays = NOW + DAYS;
  return (
    <header className={styles.header}>
      <div className={styles.headerlogo}>
        <NavLink to="/">
          <img className={styles.headerLogoIcon} src={logo} alt=""></img>
        </NavLink>
        <h1 className={styles.headerLogoText}>Achieve IT</h1>
        <div className={styles.isConnected}></div>
      </div>
      <CountdownTimer
        className={styles.countdown}
        targetDate={dateTimeAfterDays}
      />
      <ul className={styles.navitems}>
        <li className={styles.navitem}>
          <NavLink to="/upload">
            <img className={styles.upload} src={upload} alt=""></img>
          </NavLink>
        </li>
        <li className={styles.navitem}>
          <ConnectionDisplay className={styles.display} />
        </li>
      </ul>
    </header>
  );
}
export default Navigation;
