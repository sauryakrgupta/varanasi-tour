# Varanasi Tour Website

A full-stack web application for exploring tours in Varanasi, featuring user reviews and booking functionality.

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Shadcn/ui components
- Framer Motion for animations

### Backend
- Node.js with Express
- MongoDB Atlas for database
- Mongoose for ODM

## Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)
- MongoDB Atlas account (for database hosting)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd varanasi-tour
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Install backend dependencies:**
   ```bash
   cd server
   npm install
   cd ..
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root directory:
   ```
   VITE_API_BASE_URL=http://localhost:5000
   ```

   Create a `.env` file in the `server/` directory:
   ```
   PORT=5000
   MONGO_URI=mongodb+srv://admin:Anubhav%4023@cluster0.zyf3oga.mongodb.net/varanasi-reviews?appName=Cluster0
   FRONTEND_URL=http://localhost:8080
   ```

   **Note:** Replace the `MONGO_URI` with your own MongoDB Atlas connection string if needed.

## Running the Project

1. **Start the backend server:**
   ```bash
   cd server
   node index.js
   ```
   The backend will run on http://localhost:5000

2. **Start the frontend development server:**
   ```bash
   npm run dev
   ```
   The frontend will run on http://localhost:8080

3. **Open your browser and navigate to:**
   http://localhost:8080

## Features

- Tour listings and details
- User reviews and ratings
- Booking system
- Responsive design
- Image galleries
- Contact forms
- WhatsApp integration

## Project Structure

```
varanasi-tour/
├── src/                    # Frontend source code
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── services/          # API services
│   └── ...
├── server/                # Backend source code
│   ├── models/            # MongoDB models
│   └── index.js           # Express server
├── public/                # Static assets
└── ...
```

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests

### Backend
- `node index.js` - Start the server (from server/ directory)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.