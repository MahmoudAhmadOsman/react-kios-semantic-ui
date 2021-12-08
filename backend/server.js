import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Database Connection
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/burgersdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.send("Burgers api");
});

//Show all errors - server errors
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//Show/handle  server error in a better way
process.on("unhandledRejection", (err, promise) => {
  console.log(`Type of Error is : ${err}`);
  server.close(() => process.exit(1));
});
