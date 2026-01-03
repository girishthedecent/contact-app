# Contact Management App (MERN)

A simple Contact Management Web App built with the MERN stack —  
React (Vite) frontend, Node.js/Express backend, and MongoDB database.

Users can add contacts with validation and view stored contacts in a list.  
Deployed frontend and backend with environment-specific CORS configuration.

---

## 🚀 Live Demo

- **Frontend:** https://contact-app-one-tan.vercel.app  
- **Backend API:** https://contact-app-q2ra.onrender.com

---

## 🧠 Features

✅ Add a contact  
- Required: **Name**, **Email**, **Phone (10 digits)**  
- Optional: **Message**  
- Client & server validation  

✅ View all contacts  
- Displays Name, Email, Phone, Message  
- No reload required

📌 Responsive clean UI  
📌 Validations on frontend and backend  
📌 Deployed on Vercel + Render

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React with Vite |
| Backend | Node.js, Express |
| Database | MongoDB (Atlas) |
| Deployment | Vercel (frontend), Render (backend) |
| HTTP Client | Axios |

---

## 📁 Project Structure

```
contact-app/
├── backend/              # Express API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
└── frontend/             # React + Vite
    ├── src/
    │   ├── components/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── .env
    └── ...
```

---

## 🧪 Local Setup (Developer)

### Pre-requirements

✔ Node.js installed  
✔ MongoDB Atlas account (or local MongoDB)

---

### Backend

1. Navigate to backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```env
   MONGO_URL=YOUR_MONGO_ATLAS_URI
   CLIENT_URL=http://localhost:5173
   PORT=5000
   ```

4. Start server:
   ```bash
   node server.js
   ```

5. Backend health check:
   ```
   http://localhost:5000/health
   ```

---

### Frontend

1. Navigate to frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

5. Open in browser:
   ```
   http://localhost:5173
   ```

---

## 🔐 Deployment

### Backend (Render)

* Connect GitHub backend
* Build Command: `npm install`
* Start Command: `node server.js`
* Environment:
  ```
  MONGO_URL=…
  CLIENT_URL=https://your-frontend-url.vercel.app
  PORT=…
  ```

### Frontend (Vercel)

* Connect GitHub frontend
* Framework: Vite
* Build Command: `npm run build`
* Output Dir: `dist`
* Environment:
  ```
  VITE_API_URL=https://your-backend-url.onrender.com
  ```

---

## 💡 Notes

* CORS must allow the exact frontend URL (no trailing slash).
* Phone validation: exactly 10 digits.
* Email is required and validated on both frontend and backend.

---

## 📌 Contact

Built by **Girish**  
GitHub: [girishthedecent](https://github.com/girishthedecent)  


---

## 🏁 Summary

A MERN stack project demonstrating API design, frontend-backend workflow, real deployment, and proper validation — clean and easy to extend.

---

