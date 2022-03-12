import styles from "./app.module.scss";
import { NavLink } from "react-router-dom";
import logo from "./logo.svg";
import discord from "./assets/discord.svg";
import WalletConnection from "./components/Wallet/WalletConnection";
import ConnectionDisplay from "./components/Wallet/ConnectionDisplay";
import NavButton from "./components/Nav-bar/NavButton";
function App() {
  return (
    <body className={styles.body}>
      <header className={styles.header}>
        <div className={styles.headerlogo}>
          <NavLink to="/">
            <img className={styles.headerLogoIcon} src={logo} alt=""></img>
          </NavLink>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navitems}>
            <li className={styles.navitem}>
              <NavButton name="About" />
            </li>
            <li className={styles.navitem}>
              <button className={styles.button}>Roadmap</button>
            </li>
            <li className={styles.navitem}>
              <button className={styles.button}>Contact</button>
            </li>
          </ul>
        </nav>
        <div className={styles.rightHeader}>
          <a href="https://discord.gg/u9MGrMH5ms">
            <img
              className={styles.rightItem}
              src={discord}
              alt="discord logo"
            ></img>
          </a>
          <WalletConnection className={styles.rightItem} />
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainLogo}>
          <h1 className={styles.left}>Achieve</h1>
          <h1 className={styles.right}>IT</h1>
        </div>
        <div className={styles.background}>
          <div className={styles.motto}>
            <p className={styles.mottoText}>ACHIEVE YOUR FULL POTENTIAL</p>
          </div>
          <div id="About" className={styles.about}>
            <div>
              <h1>What is AchieveIt?</h1>
            </div>
            <p>
              AchieveIT is the first ever Live Action challenge based game.
              Users will be able to complete challenges to better their mental
              and physical health and be rewarded for it. Users who rank high on
              the leaderboards will be eligible to receive other rewards as
              Well!
            </p>
          </div>

          <div className={styles.roadmap}>
            <div>
              <h1>Roadmap</h1>
            </div>
            <p>
              By the end of 2022 we want at least 1000 Beta-Testers on our site
              as well as 10000 people in our community discord server.
              Eventually we will have a team of people creating custom NFT’s for
              top contenders on the leaderboard as well as people who are the
              first to complete the challenge in their city/state/nation/world
              etc. And by end of 2023 we want at least 400,000 users nationally.
            </p>
          </div>
          <div className={styles.contact}>
            <div>
              <h1>Our Team</h1>
            </div>
            <p>
              By the end of 2022 we want at least 1000 Beta-Testers on our site
              as well as 10000 people in our community discord server.
              Eventually we will have a team of people creating custom NFT’s for
              top contenders on the leaderboard as well as people who are the
              first to complete the challenge in their city/state/nation/world
              etc. And by end of 2023 we want at least 400,000 users nationally.
            </p>
          </div>
        </div>
      </main>
      <footer>
        <a href="https://discord.gg/u9MGrMH5ms">discord</a>
      </footer>
    </body>
  );
}

export default App;
