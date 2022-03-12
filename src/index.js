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
// Wallet connection
import WalletConnection from "./components/Wallet/WalletConnection";
import reportWebVitals from "./reportWebVitals";

function getLibrary(provider) {
  return new Web3(provider);
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Web3ReactProvider getLibrary={getLibrary}>
        <App />
      </Web3ReactProvider>
      {/* <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Roadmap" element={<Roadmap />} />
      </Routes> */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
