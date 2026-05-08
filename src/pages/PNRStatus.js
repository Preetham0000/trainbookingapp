import React, { useState } from 'react';
import './PNRStatus.scss';

const PNRStatus = () => {
  const [pnr, setPnr] = useState('');
  const [showResult, setShowResult] = useState(false);

  const [pnrData] = useState({
    pnr: 'ABC123456',
    status: 'Confirmed',
    trainName: 'Mumbai Rajdhani',
    trainNumber: '12951',
    from: 'New Delhi (NDLS)',
    to: 'Mumbai Central (BCT)',
    dept: '16:55',
    arrv: '08:10',
    class: '2A',
    currentLocation: 'Approaching Mumbai',
    passengers: [
      {
        name: 'Rahul Sharma',
        seat: 'A1',
      },
      {
        name: 'Priya Sharma',
        seat: 'A2',
      },
    ],
  });

  const handleSearch = () => {
    if (pnr.trim()) {
      setShowResult(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="pnr-status">
      <div className="container">
        <h1 className="page-title">Check PNR Status</h1>

        <div className="search-section">
          <div className="search-box">
            <input
              type="text"
              value={pnr}
              onChange={(e) => setPnr(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter PNR (e.g., ABC123456)"
            />
            <button className="btn btn-primary" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>

        {showResult && (
          <div className="pnr-result">
            <div className="status-header">
              <h2 className="status-pnr">PNR: {pnrData.pnr}</h2>
              <span className="status-badge confirmed">✓ {pnrData.status}</span>
            </div>

            <div className="result-grid">
              <div className="result-card">
                <h3 className="card-title">Train Details</h3>
                <div className="detail-item">
                  <span className="label">Train Name:</span>
                  <span className="value">{pnrData.trainName}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Train Number:</span>
                  <span className="value">{pnrData.trainNumber}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Class:</span>
                  <span className="value">{pnrData.class}</span>
                </div>
              </div>

              <div className="result-card">
                <h3 className="card-title">Journey</h3>
                <div className="journey-info">
                  <div className="journey-point">
                    <span className="time">{pnrData.dept}</span>
                    <span className="station">{pnrData.from}</span>
                  </div>
                  <div className="journey-line"></div>
                  <div className="journey-point">
                    <span className="time">{pnrData.arrv}</span>
                    <span className="station">{pnrData.to}</span>
                  </div>
                </div>
              </div>

              <div className="result-card full-width">
                <h3 className="card-title">Current Location</h3>
                <div className="location-info">
                  <span className="location-icon">📍</span>
                  <span className="location-text">{pnrData.currentLocation}</span>
                </div>
              </div>

              <div className="result-card full-width">
                <h3 className="card-title">Passengers</h3>
                <div className="passengers-table">
                  {pnrData.passengers.map((passenger, idx) => (
                    <div key={idx} className="table-row">
                      <div className="col">{passenger.name}</div>
                      <div className="col">
                        <span className="seat-badge">{passenger.seat}</span>
                      </div>
                      <div className="col">Confirmed</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="action-buttons">
              <button className="btn btn-primary">Download</button>
              <button className="btn btn-secondary">Share</button>
              <button className="btn btn-secondary">Cancel</button>
            </div>
          </div>
        )}

        {!showResult && (
          <div className="empty-state">
            <span className="empty-icon">🎫</span>
            <h2>Enter PNR to Check Status</h2>
            <p>Track your booking and journey updates</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PNRStatus;
