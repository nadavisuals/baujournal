const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.DATABASE;

mongoose.set("useCreateIndex", true);
mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("mongo db connected successfully");
    else
      console.log("Error while connecting" + JSON.stringify(err, undefined, 2));
  }
);

const projectsRouter = require("./routes/projects");
const daysRouter = require("./routes/days");
const userRouter = require("./routes/user");

app.use("/projects", projectsRouter);
app.use("/days", daysRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
