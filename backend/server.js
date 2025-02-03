 require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const employeeRoutes = require("./routes/employees");
const shiftRoutes = require("./routes/shifts");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/employees", employeeRoutes);
app.use("/api/shifts", shiftRoutes);

// Global Error Handler
const { errorHandler } = require("./middleware/errorHandler");
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
