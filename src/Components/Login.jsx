import React from "react";

const Login = (props) => {
  return (
    <div className="login-container unique-login-style">
      <div className="login-box">
        <h1 className="title">🌟 Welcome to E-Voting</h1>
        <p className="tagline">Your Vote. Your Power.</p>
        <div className="login-content">
          <p className="description">
            To participate in this decentralized voting platform, connect your Metamask wallet and start casting your vote with confidence and security.
          </p>
          <button className="login-button" onClick={props.connectWallet}>
            🦊 Connect Metamask
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
