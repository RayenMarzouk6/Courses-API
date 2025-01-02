const express = require("express");
const courses = require('./courses.json');

const app = express();
const cors = require('cors');
const port = 3000;

// CORS configuration to allow requests from specific origins
const corsOptions = {
  origin: ['http://localhost:3000'], // Add allowed origins here
  methods: ['GET', 'POST'],         // Allowed HTTP methods
  allowedHeaders: ['Content-Type'], // Allowed headers
};

// Use CORS middleware with options
app.use(cors(corsOptions));

// API Endpoint to Get All Courses
app.get("/courses", (req, res) => {
  res.json(courses);
});

// API Endpoint to Get a Single Course by ID
app.get("/courses/:id", (req, res) => {
  const courseId = parseInt(req.params.id, 10); // Parse the id as an integer
  const course = courses.find(c => c.id === courseId);

  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ error: "Course not found" });
  }
});

// Start the Server
app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
