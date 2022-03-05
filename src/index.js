import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//Libraries
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
//import Routers
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// components
import App from "./App";
import Navigation from "./components/Navigation-bar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Roadmap from "./components/Roadmap.js";
// Wallet connection
import WalletConnection from "./components/wallet-connector/WalletConnection";
import reportWebVitals from "./reportWebVitals";

function getLibrary(provider) {
  return new Web3(provider);
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Roadmap" element={<Roadmap />} />
      </Routes>
    </Router>
    <Web3ReactProvider getLibrary={getLibrary}>
      <WalletConnection />
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
