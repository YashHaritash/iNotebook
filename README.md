### README: iNotebook

#### **Overview**

iNotebook is a web application built using the MERN stack that allows users to securely manage personal notes. It includes user authentication to ensure data privacy and provides an intuitive interface for creating, editing, and deleting notes.

---

#### **Features**

- Secure user authentication with JWT.
- CRUD operations for personal notes.
- Responsive design for both desktop and mobile.

---

#### **Tech Stack**

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT

---

#### **Getting Started**

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd inotebook
   ```

2. Install dependencies:

   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Set up environment variables in `backend/.env`:

   ```
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-secret-key>
   ```

4. Run the application:

   ```bash
   # Start backend
   cd backend
   npm start

   # Start frontend
   cd ../frontend
   npm start
   ```

5. Access the app at `http://localhost:3000`.

---

#### **Usage**

- Sign up or log in to access your notes.
- Create, edit, and delete notes easily.

---

#### **License**

This project is licensed under the MIT License.
