import React, { useState } from 'react';
import './Home.scss';


const Home = () => {
  const [formData, setFormData] = useState({
    from: 'New Delhi (NDLS)',
    to: 'Mumbai (BCT)',
    date: '2024-05-25',
    class: 'All Classes',
  });

  const [trains, setTrains] = useState([]);
  const [showTrains, setShowTrains] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    // Mock data - in real app this would be an API call
    const mockTrains = [
      {
        id: 1,
        number: '12951',
        name: 'Mumbai Rajdhani',
        from: 'New Delhi',
        to: 'Mumbai Central',
        dept: '16:55',
        arrv: '08:10',
        duration: '15h 15m',
        distance: '1380 km',
        operators: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        rating: 4.5,
        seats: '1A: ₹3,260', '2A': '₹2,665', '3A': '₹2,055', 'SL': '₹957',
      },
      {
        id: 2,
        number: '22121',
        name: 'LTT Superfast',
        from: 'New Delhi',
        to: 'LTT Mumbai',
        dept: '20:10',
        arrv: '11:30',
        duration: '15h 20m',
        distance: '1380 km',
        operators: ['M', 'T', 'W', 'T', 'F', 'S'],
        rating: 4.3,
        seats: '1A: ₹3,430', '2A': '₹2,060', '3A': '₹1,400', 'SL': '₹915',
      },
      {
        id: 3,
        number: '12559',
        name: 'Duronto Express',
        from: 'New Delhi',
        to: 'Mumbai Central',
        dept: '22:45',
        arrv: '10:05',
        duration: '11h 20m',
        distance: '1380 km',
        operators: ['M', 'T', 'W', 'T', 'F'],
        rating: 4.7,
        seats: '1A: ₹3,650', '2A': '₹2,050', '3A': '₹1,400', 'SL': '₹500',
      },
    ];
    setTrains(mockTrains);
    setShowTrains(true);
  };

  return (
    <div className="home">
      <div className="hero">
        <img src="/train-hero.jpg" alt="Train Journey" className="hero-image" />
        <div className="hero-content">
          <h1 className="title">Book Trains</h1>
          <h1 className="title">Travel Easy</h1>
          
        </div>
      </div>

      <div className="container">
        <div className="search-section">
          <h2 className="section-title">Find Trains</h2>

          <div className="search-form">
            <div className="form-group">
              <label className="form-label">From</label>
              <input
                type="text"
                name="from"
                value={formData.from}
                onChange={handleInputChange}
                placeholder="From station"
              />
            </div>

            <div className="form-group">
              <label className="form-label">To</label>
              <input
                type="text"
                name="to"
                value={formData.to}
                onChange={handleInputChange}
                placeholder="To station"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Journey Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Class</label>
              <select name="class" value={formData.class} onChange={handleInputChange}>
                <option>All Classes</option>
                <option>1A (First AC)</option>
                <option>2A (Second AC)</option>
                <option>3A (Third AC)</option>
                <option>SL (Sleeper)</option>
              </select>
            </div>

            <button className="btn btn-primary search-btn" onClick={handleSearch}>
              Search Trains
            </button>
          </div>
        </div>

        {showTrains && (
          <div className="results-section">
            <h2 className="section-title">Available Trains</h2>

            <div className="trains-list">
              {trains.map((train) => (
                <div key={train.id} className="train-card">
                  <div className="card-header">
                    <div>
                      <h3 className="card-name">{train.number} - {train.name}</h3>
                      <p className="card-route">
                        {train.from} → {train.to}
                      </p>
                    </div>
                    <span className="card-rating">⭐ {train.rating}</span>
                  </div>

                  <div className="card-body">
                    <div className="card-time">
                      <div className="time-slot">
                        <span className="time">{train.dept}</span>
                        <span className="station">NDLS</span>
                      </div>
                      <div className="duration">
                        <span>—</span>
                        <span className="duration-text">{train.duration}</span>
                        <span>—</span>
                      </div>
                      <div className="time-slot">
                        <span className="time">{train.arrv}</span>
                        <span className="station">BCT</span>
                      </div>
                    </div>

                    <div className="card-details">
                      <p className="detail-item">
                        <span className="label">Classes:</span>
                      </p>
                      <div className="classes-grid">
                        {Object.entries(train.seats).map(([cls, price], idx) => (
                          <div key={idx} className="class-badge">
                            <span className="class-name">{cls}</span>
                            <span className="class-price">{price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="card-footer">
                    <button className="btn btn-primary">View Seats</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="popular-section">
          <h2 className="section-title">Popular Routes</h2>

          <div className="popular-routes">
            <button className="route-card" onClick={() => {}}>
              <span className="route-icon"> </span>
              <span className="route-text">Delhi ↔ Mumbai</span>
            </button>
            <button className="route-card" onClick={() => {}}>
              <span className="route-icon"> </span>
              <span className="route-text">Delhi ↔ Kolkata</span>
            </button>
            <button className="route-card" onClick={() => {}}>
              <span className="route-icon"> </span>
              <span className="route-text">Bangalore ↔ Chennai</span>
            </button>
            <button className="route-card" onClick={() => {}}>
              <span className="route-icon"> </span>
              <span className="route-text">Mumbai ↔ Pune</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
