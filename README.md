# 💼 CareerConnect — Job Portal

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)
![Firebase](https://img.shields.io/badge/Firebase-Auth_&_Hosting-FFCA28?style=for-the-badge&logo=firebase)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwind-css)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript)

> A full-stack job portal where employers can post and manage listings while candidates browse, apply, and track their applications — secured with Firebase authentication and JWT-protected APIs.

**🌐 Live Demo:** [https://job-portal-52572.web.app](https://job-portal-52572.web.app)

---

## ✨ Features

- 🔐 Firebase authentication — email/password and Google OAuth
- 👔 Employer dashboard — post, edit, and manage job listings
- 🎯 Candidate dashboard — browse, apply, and track applications
- 🔑 JWT-protected API routes for secure data access
- 🔍 Job search and filtering functionality
- 🎨 Smooth animations with Motion and Lottie React
- 📱 Fully responsive design with Tailwind CSS and DaisyUI
- 🚀 Deployed on Firebase Hosting

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 7 | Build tool and dev server |
| JavaScript (ES6+) | Primary language |
| Tailwind CSS v4 | Utility-first styling |
| DaisyUI v5 | Pre-built UI components |
| React Router DOM v7 | Client-side routing |
| Axios | HTTP requests to backend API |
| Firebase | Authentication and hosting |
| Motion | Page and component animations |
| Lottie React | JSON-based animations |
| SweetAlert2 | User feedback modals |

### Backend
| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | REST API framework |
| MongoDB | NoSQL database |
| JWT | API route protection |

> 🔗 Backend repository: [Job-Portal-Server](https://github.com/Shad-Bin-Abi-Aydid/Job-Portal-Server)

---

## 🏗️ Project Structure

```
src/
├── assets/         # Images and static resources
├── components/     # Reusable UI components
├── contexts/       # React Context — AuthContext
├── hooks/          # Custom React hooks
├── pages/          # Route-specific page components
├── routes/         # Route configuration & protected routes
└── main.jsx        # Application entry point
```

---

## 🔐 Authentication Flow

```
Register / Google OAuth → Firebase Auth → JWT Token → Protected API Routes
```

- Authentication is handled by Firebase (email/password + Google OAuth)
- On login, a JWT token is issued for backend API access
- Protected routes validate the token before returning data

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js v18+
- A Firebase project ([firebase.google.com](https://firebase.google.com))
- Backend server running locally

### 1. Clone the repository
```bash
git clone https://github.com/Shad-Bin-Abi-Aydid/Job-Portal-Client.git
cd Job-Portal-Client
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file in the root:
```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id
VITE_API_URL=http://localhost:5000
```

### 4. Run the development server
```bash
npm run dev
```

Frontend runs at **http://localhost:5173**

---

## 🌐 Deployment

This project is deployed on **Firebase Hosting**.

```bash
npm run build
firebase deploy
```

> Make sure `firebase.json` has `"public": "dist"` and rewrites configured for React Router.

---

## 👨‍💻 Author

**Shad Bin Abi Aydid**
- Portfolio: [shadaydid.com](https://shadaydid.com)
- GitHub: [@Shad-Bin-Abi-Aydid](https://github.com/Shad-Bin-Abi-Aydid)
- LinkedIn: [shad-aydid](https://www.linkedin.com/in/shad-aydid)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
