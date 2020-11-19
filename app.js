const express = require("express");

const morgan = require("morgan");
const cookieParser = require("cookie-parser");
//const session = require("express-session");
const cors = require("cors");
const app = express();
const PORT = 5000;

const usersRouter = require("./routes/usersRoute");
const reviewsRouter = require("./routes/movieReviewsRoute");

// app.use(
//   session({
//     secret: "@theReview",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// cors는  추후 수정 예정!
app.use(
  cors({
    origin: true,
    method: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  console.log("req", req.cookies);

  res.status(200).send("🌈️ GET request to the Netflex ! ");
});

app.use("/user", usersRouter);
app.use("/movie", reviewsRouter);

app.listen(PORT, () => {
  console.log(`📢️ Server Listening On ${PORT}`);
});
