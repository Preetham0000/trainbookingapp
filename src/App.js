import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import MyBookings from './pages/MyBookings';
import PNRStatus from './pages/PNRStatus';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/pnr-status" element={<PNRStatus />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <div className="container">
            <p>&copy; 2026 IRCTC. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
