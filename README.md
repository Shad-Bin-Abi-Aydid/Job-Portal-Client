# 💼 Job Portal — Client

A full-stack job portal web application where employers can post jobs and candidates can browse and apply. Built with React, Firebase, and a custom Express REST API.

🔗 **Live Demo:** [https://job-portal-52572.firebaseapp.com](https://job-portal-52572.firebaseapp.com)  
🔗 **Backend Repo:** [Job-Portal-Server](https://github.com/Shad-Bin-Abi-Aydid/Job-Portal-Server)

---

## ✨ Features

- 🔐 Firebase Authentication (Email/Password & Google Sign-In)
- 📋 Browse and search available job listings
- 📝 Job application submission
- 🏢 Employers can post and manage job listings
- 🔒 JWT-based route protection for authenticated actions
- 📱 Fully responsive UI with Tailwind CSS and DaisyUI
- ✨ Smooth animations powered by Motion (Framer Motion)
- 🔔 Interactive alerts and confirmations with SweetAlert2

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite |
| Styling | Tailwind CSS v4, DaisyUI v5 |
| Authentication | Firebase Auth |
| HTTP Client | Axios |
| Routing | React Router DOM v7 |
| Animations | Motion, Lottie React |
| Alerts | SweetAlert2 |
| Deployment | Firebase Hosting |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- A Firebase project ([create one here](https://console.firebase.google.com))

### 1. Clone the repository

```bash
git clone https://github.com/Shad-Bin-Abi-Aydid/Job-Portal-Client.git
cd Job-Portal-Client
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add your Firebase config:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_API_URL=http://localhost:5000
```

### 4. Run the development server

```bash
npm run dev
```

The app will be running at `http://localhost:5173`

> Make sure the backend server is also running. See the [Server README](https://github.com/Shad-Bin-Abi-Aydid/Job-Portal-Server).

---

## 📁 Project Structure

```
src/
├── assets/         # Images and static files
├── components/     # Reusable UI components
├── contexts/       # React Context (AuthContext, etc.)
├── hooks/          # Custom React hooks
├── pages/          # Route-level page components
├── routes/         # Route configuration
└── main.jsx        # App entry point
```

---

## 🔗 Related

- **Backend:** [Job-Portal-Server](https://github.com/Shad-Bin-Abi-Aydid/Job-Portal-Server) — Express REST API with MongoDB and JWT auth
