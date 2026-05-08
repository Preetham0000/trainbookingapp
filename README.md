# Train Booking App

A React-based web application for managing train bookings. The application allows users to manage train reservations, check PNR status, and maintain profile information through a clean and responsive interface.

---

## Overview

The project is designed to provide a simple and user-friendly train booking management system with reusable components and modular page structures.

---

## Features

- View and manage train bookings
- Check PNR status
- User profile management
- Responsive user interface
- SCSS-based styling architecture
- Reusable React components

---

## Tech Stack

- React.js
- SCSS
- JavaScript
- HTML5
- CSS3

---

## Project Structure

```bash
Train-Booking-App/
│
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   └── Navbar/
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   ├── MyBookings.js
│   │   ├── PNRStatus.js
│   │   └── Profile.js
│   │
│   ├── styles/
│   │   ├── global.scss
│   │   └── variables.scss
│   │
│   ├── App.js
│   └── index.js
│
├── package.json
└── README.md
```

---

## Components

### Navbar
Reusable navigation component used across the application for page navigation.

---

## Pages

### Home
Landing page of the application displaying basic train booking information.

### MyBookings
Displays the list of train bookings made by the user and allows booking management.

### PNRStatus
Allows users to check the status of their train ticket using the PNR number.

### Profile
Manages user profile details and related information.

---

## Styling

The application uses SCSS for styling and maintains a modular styling structure:

- `global.scss` for global application styles
- `variables.scss` for reusable SCSS variables

---

## Responsive Design

The application is designed to work across different screen sizes including desktop, tablet, and mobile devices.

---

## Future Enhancements

- Online payment integration
- Train schedule search
- Seat availability checker
- Authentication and authorization
- Admin dashboard
- Notification system
