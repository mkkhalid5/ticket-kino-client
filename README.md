# 🚀 TicketKino - Online Ticket Booking Platform

> A full-stack MERN based Online Ticket Booking Platform where users can discover, book, and securely pay for Bus, Train, Launch, and Flight tickets with role-based dashboards for Users, Vendors, and Admins.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-green?logo=mongodb)
![Express](https://img.shields.io/badge/Express.js-black?logo=express)
![Stripe](https://img.shields.io/badge/Stripe-Payment-635BFF?logo=stripe)
![JWT](https://img.shields.io/badge/JWT-Secured-red)

---

# 🌐 Live Website

🔗 Live Site: **[Live Link](https://ticket-kino-client.vercel.app/)**

## GitHub Repository

### Client
https://github.com/mkkhalid5/ticket-kino-client

### Server
https://github.com/mkkhalid5/ticket-kino-server

---

# 📖 Project Overview

TicketKino is a complete Online Ticket Booking Platform developed using the MERN Stack.

The platform allows passengers to search, filter, book and purchase transportation tickets while Vendors can manage their own tickets and Admins have complete control over users, advertisements, approvals and fraud detection.

The project focuses on solving real-world ticket booking problems including booking verification, secure payment, ticket inventory management, vendor approval workflow and role-based access control.

---

# 🎯 Main Objectives

- Online ticket booking
- Vendor ticket management
- Secure Stripe payment
- Booking approval workflow
- Role based authentication
- Admin moderation
- Advertisement management
- Ticket inventory management

---

# 👥 User Roles

## 👤 User

- Register & Login
- Google Authentication
- Browse Tickets
- Search Tickets
- Filter Tickets
- Sort Tickets
- Book Tickets
- Stripe Payment
- Transaction History
- Countdown before departure

---

## 🏢 Vendor

- Add Tickets
- Update Tickets
- Delete Tickets
- View Booking Requests
- Accept/Reject Booking
- Revenue Analytics
- Charts Dashboard

---

## 🛡️ Admin

- Manage Users
- Make Admin
- Make Vendor
- Mark Vendor as Fraud
- Approve Tickets
- Reject Tickets
- Advertise Tickets
- Control Homepage Advertisement

---

# ✨ Features

## Authentication

- Better Auth Authentication
- Google Login
- JWT Protected APIs
- Role Based Authorization
- Protected Routes
- Secure Session Management

---

## Home Page

- Hero Slider
- Featured Advertisement Tickets
- Latest Tickets
- Popular Routes
- Why Choose Us
- Responsive Design

---

## All Tickets

- Pagination
- Search by From Location
- Search by To Location
- Transport Type Filter
- Sort Price Low → High
- Sort Price High → Low
- Ticket Details

---

## Ticket Details

- Complete Ticket Information
- Live Countdown
- Book Now Modal
- Quantity Validation
- Expired Ticket Detection
- Available Seat Validation

---

## User Dashboard

- User Profile
- My Booked Tickets
- Payment Status
- Transaction History
- Countdown Timer

---

## Vendor Dashboard

- Vendor Profile
- Add Ticket
- Image Upload (ImgBB)
- Manage Tickets
- Booking Requests
- Revenue Dashboard
- Statistics Charts

---

## Admin Dashboard

- Admin Profile
- Manage Tickets
- Manage Users
- Advertisement Management
- Fraud Vendor Detection

---

# 💳 Payment System

- Stripe Integration
- Secure Checkout
- Automatic Price Calculation
- Payment History
- Transaction Records

---

# 🔒 Security Features

- JWT Authentication
- Protected API Routes
- Environment Variables
- MongoDB Credentials Protection
- Role Based Access Control
- Secure Payment Processing

---

# 📊 Dashboard Analytics

- Revenue Chart
- Ticket Sold Chart
- Total Revenue
- Total Tickets
- Booking Statistics

---

# 🌙 Extra Features

- Light Mode
- Responsive Dashboard
- Mobile Friendly
- Loading Spinner
- Error Page (404)
- Countdown Timer

---

# 🛠️ Tech Stack

## Frontend

- Next.js 15
- React 19
- Tailwind CSS
- HeroUI
- React Icons
- Framer Motion
- React Hook Form
- Axios

---

## Backend

- Node.js
- Express.js
- MongoDB
- JWT
- Better Auth

---

## Payment

- Stripe

---

## Image Upload

- Cloudinary

---

## Charts

- Recharts

---

# 📦 NPM Packages Used

### Frontend

- next
- react
- tailwindcss
- @heroui/react
- react-hot-toast
- react-icons
- gravity ui icons
- framer-motion
- recharts

### Backend

- express
- mongodb
- jsonwebtoken
- dotenv
- cors
- stripe
- better-auth

---

# ⚡ Problems Solved

This project solves several real-world problems commonly found in traditional ticket booking systems.

## ✅ Secure Authentication

- Email & Password Login
- Google Login
- JWT Protected APIs
- Role Based Access

---

## ✅ Vendor Approval Workflow

Problem:
Anyone should not be able to publish tickets instantly.

Solution:

- Vendors submit tickets.
- Tickets remain Pending.
- Admin Approves or Rejects.
- Only approved tickets become publicly visible.

---

## ✅ Fake Vendor Prevention

Problem:
Fraud vendors can create fake tickets.

Solution:

- Admin can mark vendors as Fraud.
- All vendor tickets become hidden.
- Fraud vendors cannot add new tickets.

---

## ✅ Overbooking Prevention

Problem:
Users should not purchase more tickets than available.

Solution:

- Booking quantity validation.
- Seat availability checking.
- Automatic ticket quantity reduction after successful payment.

---

## ✅ Expired Ticket Booking

Problem:
Users shouldn't purchase expired tickets.

Solution:

- Live Countdown Timer.
- Automatic Expiration Detection.
- Disabled Book Now button.
- Disabled Payment button after departure.

---

## ✅ Secure Online Payment

Problem:
Need secure payment system.

Solution:

- Stripe Payment Gateway.
- Verified Transactions.
- Payment History.
- Automatic Status Update.

---

## ✅ Inventory Management

Problem:
Ticket stock should stay synchronized.

Solution:

- Ticket quantity decreases automatically after payment.
- Zero quantity disables booking.
- Inventory updates instantly.

---

## ✅ Booking Approval Workflow

Problem:
Vendors need to verify bookings.

Solution:

- Pending Booking
- Accept Booking
- Reject Booking
- Pay After Acceptance

---

## ✅ Advertisement Control

Problem:
Homepage promotions need admin control.

Solution:

- Admin selects featured tickets.
- Maximum 6 advertisements.
- Toggle Advertise/Unadvertise.

---

## ✅ Better User Experience

Problems solved:

- Search tickets instantly
- Filter by transport type
- Sort by price
- Pagination
- Responsive UI
- Loading states
- Error handling

---


---

# 🚀 Installation

## Clone Repository

```bash
git clone <client_repo>
git clone <server_repo>
```

## Client

```bash
cd client

npm install

npm run dev
```

## Server

```bash
cd server

npm init -y

node index.js
```

---

# 🔑 Environment Variables

## Client

```
BETTER_AUTH_SECRET=here your better auth secret
BETTER_AUTH_URL=here your base url like http://localhost:3000
MONGODB_URI=here your mongoDB URI
NEXT_PUBLIC_IMG_API_KEY= here cloudinary image upload api key
NEXT_PUBLIC_API_URI= here your server api url 
GOOGLE_CLIENT_ID= here your google oAuth Client ID
GOOGLE_CLIENT_SECRET= here your google oAuth Client Secret
```

## Server

```
PORT=5000
MONGODB_URI=your mongo db connection uri
CLIENT_URL= http://localhost:3000 
STRIPE_SECRET_KEY= here your stripe sandbox secret key
CLOUDINARY_API_SECRET= here cloudinary api secret
CLOUDINARY_API_KEY= here cloudinary api key
CLOUDINARY_CLOUD_NAME= here cloudinary name
```

---

# 📱 Responsive Design

✔ Mobile

✔ Tablet

✔ Laptop

✔ Desktop

---

# 🎨 UI Highlights

- Modern Dashboard
- Clean UI
- Responsive Cards
- Attractive Hero Banner
- Consistent Color Palette
- Interactive Animations
- Professional Layout

---

# 📌 Future Improvements

- PDF Ticket Download
- Live Seat Selection
- QR Code Ticket
- Booking Cancellation
- Notification System
- Email Confirmation
- Multi-language Support
- Admin Analytics Dashboard

---

# 👨‍💻 Developed By

**MK KHALID MAHAMUD**

MERN Stack Developer

⭐ If you like this project, don't forget to give it a Star!