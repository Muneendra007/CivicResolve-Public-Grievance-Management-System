# CivicResolve - Public Grievance Management System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen.svg)](https://www.mongodb.com/)

**CivicResolve** is a comprehensive, full-stack citizen feedback and public grievance resolution platform designed to streamline road infrastructure monitoring, issue reporting, and municipality workflow management.

---

## 🌟 Key Features

### 👤 Citizen Portal
- **Interactive Issue Reporting**: Report road hazards, potholes, drainage failures, broken streetlights, and damaged signage with GPS geolocation tags and image uploads.
- **Real-Time Issue Tracking**: Live status lifecycle tracking (`Reported` ➔ `Assigned` ➔ `In Progress` ➔ `Resolved`).
- **Community Gallery**: Before-and-after photo galleries highlighting resolved municipal works.
- **Feedback & Ratings**: Rate resolution quality and leave constructive citizen reviews.
- **Donation Support**: Integrated Razorpay portal for civic crowd-contribution initiatives.

### 👷 Field Staff Dashboard
- **Role-Based Task Board**: Direct assignment to specialized teams (Pothole repairs, Electrical, Sanitation, Drainage, Signage).
- **Progress Tracking & Verification**: Field staff upload proof-of-work updates and stage photos for municipal administrative review.
- **Performance Metrics**: Resolution statistics and completion milestones.

### 🛡️ Administrative Command Center
- **Grievance Triage & Assignment**: Verify incoming reports, prioritize urgency, reassign tasks, or reject fraudulent reports with automated citizen alerts.
- **User & Staff Governance**: Role-based access control (RBAC), user suspension/verification, and staff management.
- **Analytics & Health Insights**: Geospatial breakdowns, category distribution charts, resolution turn-around-times, and platform audit logs.
- **Automated Communication**: Powered by SendGrid and transactional email notifications for status updates.

---

## 🏗️ Architecture & Tech Stack

```
CivicResolve
├── backend/          # Express.js REST API & Socket.io server
│   ├── src/controllers/  # Modular business logic
│   ├── src/models/       # Mongoose schemas (Reports, Users, Staff, Gallery)
│   ├── src/routes/       # Protected API endpoints
│   ├── src/middleware/   # JWT auth, RBAC, Multer file handling
│   └── public/           # Responsive email templates
└── frontend/         # React 18 SPA (Vite + TailwindCSS + MUI)
    ├── src/components/   # Reusable UI, Map pickers, Layouts
    ├── src/pages/        # Citizen, Staff, and Admin dashboards
    ├── src/services/     # Axios API integrations
    └── src/context/      # Auth, Theme, and Realtime Notification state
```

### Backend
- **Runtime**: Node.js (>= 18)
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Real-Time Engine**: Socket.io
- **Authentication**: JWT (JSON Web Tokens) & Bcrypt password encryption
- **Media Storage**: Cloudinary integration
- **Email Dispatch**: SendGrid / Nodemailer SMTP
- **Payment Processing**: Razorpay API

### Frontend
- **Core**: React 18, Vite
- **Styling**: TailwindCSS, Material-UI (MUI), Lucide Icons
- **Mapping**: Leaflet & React-Leaflet (OpenStreetMap)
- **Charts & Data Viz**: Chart.js, Recharts, MUI X-Charts
- **Animations**: Framer Motion
- **State & Notifications**: React Context API, React Hot Toast

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas instance)
- npm or yarn

---

### 1. Clone the Repository
```bash
git clone https://github.com/Muneendra007/CivicResolve-Public-Grievance-Management-System.git
cd CivicResolve-Public-Grievance-Management-System
```

---

### 2. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` configuration file in `backend/`:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/civicresolve?retryWrites=true&w=majority
   JWT_SECRET=your_super_secret_jwt_key
   JWT_EXPIRE=30d

   # Cloudinary (Image storage)
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

   # Email Configuration (SendGrid or SMTP)
   SENDGRID_API_KEY=SG.your_sendgrid_key
   FROM_EMAIL=notifications@civicresolve.org
   FROM_NAME=CivicResolve Team

   # Client URL
   CLIENT_URL=http://localhost:5173
   ```
4. Start the backend development server:
   ```bash
   npm run dev
   ```

---

### 3. Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in `frontend/`:
   ```env
   VITE_API_BASE_URL=http://localhost:5000/api
   VITE_SOCKET_URL=http://localhost:5000
   ```
4. Launch the Vite development server:
   ```bash
   npm run dev
   ```
5. Visit `http://localhost:5173` in your browser.

---

## 🔒 Security Best Practices
- Passwords salted and hashed with `bcryptjs`.
- JWT-based authorization tokens with HTTP-only and Bearer token configurations.
- Helmet security headers and rate-limiting enabled on sensitive API routes.
- Sanitized database queries protecting against NoSQL injection.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
