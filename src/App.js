import styles from "./app.module.scss";

//Components
import WalletConnection from "./components/Wallet/WalletConnection";
import NavButton from "./components/Nav-bar/NavButton";

//Libraries
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

//Assets
import goggins from "./assets/goggins.png";
import wim from "./assets/wim hof.png";
import roadmap from "./assets/roadmap.png";
import discord from "./assets/discord.svg";
import trophy from "./assets/trophy.png";

//Web3
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

function getLibrary(provider) {
  return new Web3(provider);
}

function App() {
  return (
    <body className={styles.body}>
      <header className={styles.header}>
        <div className={styles.headerlogo}>
          <NavLink to="/">
            <img className={styles.headerLogoIcon} src={trophy} alt=""></img>
          </NavLink>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navitems}>
            <li className={styles.navitem}>
              <NavButton name="About" />
            </li>
            <li className={styles.navitem}>
              <NavButton name="Roadmap" />
            </li>
            <li className={styles.navitem}>
              <NavButton name="Contact" />
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
        </div>
      </header>
      <main className={styles.main}>
        <Container>
          <Row className={styles.row}>
            <div className={styles.mainLogo}>
              <h1 className={styles.left}>Achieve</h1>
              <h1 className={styles.right}>IT</h1>
            </div>
          </Row>
        </Container>
        <div className={styles.background}>
          <div className={styles.content}>
            <Container>
              <Row className={styles.row}>
                <div id="About" className={styles.motto}>
                  <p className={styles.mottoText}>ACHIEVE</p>
                  <p className={styles.mottoText}>YOUR FULL</p>
                  <p className={styles.mottoText}>POTENTIAL</p>
                </div>
              </Row>
              <Row className={styles.row}>
                <Col className={styles.col} md={6}>
                  <img src={goggins} alt=""></img>
                </Col>
                <Col className={styles.col} md={6}>
                  <div className={styles.about}>
                    <div>
                      <h1>What is AchieveIt?</h1>
                    </div>
                    <p>
                      AchieveIT is the first ever Web 3 real life challenge
                      based game. Users will be able to complete real life
                      challenges to improve their discipline in exchange for
                      crypto currency and NFT's
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className={styles.row}>
                <Col className={styles.col} md={6}>
                  <div className={styles.mission}>
                    <div>
                      <h1>Our Mission</h1>
                    </div>
                    <p>
                      We want to incentivize people to build discipline, grasp
                      inner potential, and leave the comfort of the 21st
                      century. We want to motivate people to reclaim their life
                      in this world of distraction.
                    </p>
                  </div>
                </Col>
                <Col className={styles.col} md={6}>
                  <img src={wim} alt=""></img>
                </Col>
              </Row>
              <Row id="Roadmap" className={styles.row}>
                <div className={styles.roadmaptext}>
                  <h1>Roadmap</h1>
                </div>
                <img src={roadmap} className={styles.roadmapImage} alt=""></img>
              </Row>
              <Row className={styles.row}>
                <div className={styles.team}>
                  <div>
                    <h1>Our Team</h1>
                  </div>
                  <p>
                    Who are we? We are a Black and Latino team in highschool
                    solving problems using blockchain technology. We are driven
                    to be disciplined and want to spread this attitude so
                    everybody can Achieve It!
                  </p>
                </div>
              </Row>
              <div className={styles.join}>
                <p className={styles.jointext}>ARE YOU READY TO ACHIEVE IT?</p>
                <NavLink to="/challenges">
                  <Web3ReactProvider getLibrary={getLibrary}>
                    <WalletConnection />
                  </Web3ReactProvider>
                </NavLink>
              </div>
            </Container>
          </div>
        </div>
      </main>
      <footer id="Contact" className={styles.footer}>
        <Container>
          <Row>
            <Col className={styles.footerCol} md={4}>
              <a href="">FAQ</a>
              <a href="">Contact Us</a>
            </Col>
            <Col className={styles.footerCol} md={4}>
              <a href="">About</a>
              <a href="">Our Newsletter</a>
            </Col>
            <Col className={styles.footerCol} md={4}>
              <a href="">Discord</a>
              <a href="">Instagram</a>
              <a href="">Twitter</a>
            </Col>
          </Row>
        </Container>
      </footer>
    </body>
  );
}

export default App;
