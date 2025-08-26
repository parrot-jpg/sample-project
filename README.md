# SkillBridge - Connect Volunteers with NGOs

SkillBridge is a platform that connects skilled volunteers with NGOs for meaningful, short-term and long-term opportunities.

## Setup Instructions

### Backend Setup:
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Make sure your MongoDB Atlas connection string is working properly in the `.env` file

4. Run the development server:
   ```bash
   npm run dev
   ```

The backend will run on http://localhost:5555

### Frontend Setup:
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend will run on http://localhost:3000

## Features

- **User Authentication**: Register and login as either a Volunteer or NGO
- **Role-based Access**: Different dashboards for Volunteers and NGOs
- **Profile Management**: Complete profiles with skills, location, and organization details
- **Responsive Design**: Works on desktop and mobile devices

## Backend API Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

## Technologies Used

### Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS for cross-origin requests

### Frontend:
- React.js
- React Router for navigation
- Axios for API calls
- Context API for state management
- CSS3 with gradients and animations

## File Structure

```
skillbridge/
├── backend/
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── LandingPage.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Dashboard.js
│   │   │   ├── LandingPage.css
│   │   │   ├── Login.css
│   │   │   ├── Register.css
│   │   │   └── Dashboard.css
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── README.md
```

## Getting Started

1. Make sure you have Node.js and npm installed
2. Set up a MongoDB Atlas cluster and get your connection string
3. Update the `.env` file with your MongoDB connection string
4. Follow the setup instructions above for both backend and frontend
5. Open your browser and navigate to http://localhost:3000

## Default Credentials

The application uses the MongoDB connection string provided in the `.env` file. Make sure to update it with your own MongoDB Atlas credentials.

## Support

For any issues or questions, please check the console logs for error messages and ensure all dependencies are properly installed.
