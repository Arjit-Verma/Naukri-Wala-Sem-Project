// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Mock data matching your chart
const jobStatisticsData = [
  {
    date: "05 Nov 2022",
    notPlaced: 10,
    processing: 20,
    interview: 30,
    placed: 40,
  },
  {
    date: "05 Nov 2022",
    notPlaced: 15,
    processing: 25,
    interview: 35,
    placed: 25,
  },
  {
    date: "04 Nov 2022",
    notPlaced: 20,
    processing: 30,
    interview: 25,
    placed: 25,
  },
  {
    date: "03 Nov 2022",
    notPlaced: 25,
    processing: 25,
    interview: 30,
    placed: 20,
  },
  {
    date: "02 Nov 2022",
    notPlaced: 30,
    processing: 20,
    interview: 25,
    placed: 25,
  },
];

// API endpoint
app.get("/api/job-statistics", (req, res) => {
  try {
    // Simulate slight delay for realism
    setTimeout(() => {
      res.json(jobStatisticsData);
    }, 500);
  } catch (error) {
    console.error("Error fetching job statistics:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
