import styles from "./app.module.scss";
import { NavLink } from "react-router-dom";
import logo from "./logo.svg";
import WalletConnection from "./components/Wallet/WalletConnection";

function App() {
  return (
    <body className={styles.body}>
      <header className={styles.header}>
        <div className={styles.headerlogo}>
          <NavLink to="/">
            <img className={styles.headerLogoIcon} src={logo} alt=""></img>
          </NavLink>
          <h1 className={styles.headerLogoText}>Achieve It</h1>
          <div className={styles.isConnected}></div>
        </div>

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
      <main className={styles.main}>
        <div className={styles.mainLogo}>
          <h1 className={styles.left}>Achieve</h1>
          <h1 className={styles.right}>IT</h1>
        </div>
      </main>
    </body>
  );
}

export default App;
