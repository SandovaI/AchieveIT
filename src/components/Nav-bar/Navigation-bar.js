import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.scss";
import logo from "../../logo.svg";
import WalletConnection from "../Wallet/WalletConnection";
import ConnectionDisplay from "../Wallet/ConnectionDisplay";
import CountdownTimer from "../Countdown/CountdownTimer";
function Navigation() {
  const DAYS = 3 * 24 * 60 * 60 * 1000;
  const NOW = new Date().getTime();

  const dateTimeAfterDays = NOW + DAYS;
  return (
    <header className={styles.header}>
      <div className={styles.headerlogo}>
        <NavLink to="/">
          <img className={styles.headerLogoIcon} src={logo} alt=""></img>
        </NavLink>
        <h1 className={styles.headerLogoText}>Achieve It</h1>
        <div className={styles.isConnected}>
          <ConnectionDisplay />
        </div>
      </div>
      <CountdownTimer
        className={styles.countdown}
        targetDate={dateTimeAfterDays}
      />
      <nav className={styles.nav}>
        <ul className={styles.navitems}>
          <li className={styles.navitem}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={styles.navitem}>
            <NavLink to="/About">About</NavLink>
          </li>
          <li className={styles.navitem}>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
          <li className={styles.navitem}>
            <NavLink to="/RoadMap">Roadmap</NavLink>
          </li>
          <li className={styles.navitem}>
            <WalletConnection />
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navigation;
