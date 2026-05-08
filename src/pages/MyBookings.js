import React, { useState } from 'react';
import './MyBookings.scss';

const MyBookings = () => {
  const [bookings] = useState([
    {
      id: 1,
      pnr: 'ABC123456',
      trainName: 'Mumbai Rajdhani',
      trainNumber: '12951',
      from: 'New Delhi',
      to: 'Mumbai',
      dept: '16:55',
      arrv: '08:10',
      date: '25-05-2024',
      class: '2A',
      seats: ['A1', 'A2'],
      totalAmount: '₹5,330',
      status: 'Confirmed',
    },
    {
      id: 2,
      pnr: 'XYZ789012',
      trainName: 'Duronto Express',
      trainNumber: '12559',
      from: 'Pune',
      to: 'Bangalore',
      dept: '18:30',
      arrv: '06:30',
      date: '30-05-2024',
      class: '3A',
      seats: ['B5'],
      totalAmount: '₹2,100',
      status: 'Confirmed',
    },
  ]);

  return (
    <div className="my-bookings">
      <div className="container">
        <h1 className="page-title">My Bookings</h1>

        {bookings.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">🎫</span>
            <h2>No Bookings Yet</h2>
            <p>Start booking trains now!</p>
          </div>
        ) : (
          <div className="bookings-list">
            {bookings.map((booking) => (
              <div key={booking.id} className="booking-card">
                <div className="booking-header">
                  <div className="booking-info">
                    <h3>{booking.trainNumber} - {booking.trainName}</h3>
                    <p className="booking-pnr">PNR: <span>{booking.pnr}</span></p>
                  </div>
                  <span className={`booking-status ${booking.status.toLowerCase()}`}>
                    {booking.status}
                  </span>
                </div>

                <div className="booking-body">
                  <div className="booking-route">
                    <div className="route-point">
                      <div className="point-time">{booking.dept}</div>
                      <div className="point-station">{booking.from}</div>
                    </div>
                    <div className="route-line"></div>
                    <div className="route-point">
                      <div className="point-time">{booking.arrv}</div>
                      <div className="point-station">{booking.to}</div>
                    </div>
                  </div>

                  <div className="booking-details">
                    <div className="detail-row">
                      <span className="detail-label">Class:</span>
                      <span className="detail-value">{booking.class}</span>
                    </div>    
                    <div className="detail-row">
                      <span className="detail-label">Seats:</span>
                      <span className="detail-value">{booking.seats.join(', ')}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Amount:</span>
                      <span className="detail-value amount">{booking.totalAmount}</span>
                    </div>
                  </div>
                </div>

                <div className="booking-footer">
                  <button className="btn btn-secondary btn-small">Download</button>
                  <button className="btn btn-secondary btn-small">Share</button>
                  <button className="btn btn-secondary btn-small">Cancel</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
