import React from "react";

const Connected = (props) => {
  return (
    <div className="connected-container new-interface">
      {/* Left Upper Corner Header */}
      <div className="header-left">
        <h1 className="system-title">🗳️ E-Voting System</h1>
      </div>

      {/* Main Card */}
      <div className="card">
        <div className="card-header">
          <h2>🔗 Wallet Connected</h2>
          <p className="account-info">
            <strong>🦊 Metamask Account:</strong> {props.account}
          </p>
          <p className="timer">
            ⏳ <strong>Time Remaining:</strong> {props.remainingTime}
          </p>
        </div>

        {/* Vote Section */}
        <div className="card-body">
          {props.showButton ? (
            <div className="vote-status">
              <p className="status-text">✅ You've already voted!</p>
            </div>
          ) : (
            <div className="voting-form">
              <div className="form-group">
                <label htmlFor="candidateIndex" className="label">
                  🎯 Select Candidate Index
                </label>
                <input
                  type="number"
                  id="candidateIndex"
                  className="input-field"
                  placeholder="Enter index"
                  value={props.number}
                  onChange={props.handleNumberChange}
                />
              </div>
              <button className="vote-button" onClick={props.voteFunction}>
                🗳️ Vote Now
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Candidates Table */}
      <div className="candidates-container">
        <h3>📊 Candidate List</h3>
        <div className="table-responsive">
          <table className="candidates-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Votes</th>
              </tr>
            </thead>
            <tbody>
              {props.candidates.map((candidate, index) => (
                <tr key={index}>
                  <td>{candidate.index}</td>
                  <td>{candidate.name}</td>
                  <td>{candidate.voteCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Connected;
