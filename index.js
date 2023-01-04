import express from "express"
const app = express()
import authRoutes from "./routes/auth.js";

import cors from "cors";
import cookieParser from "cookie-parser";

//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/auth", authRoutes)

app.listen(4000, () => {
  console.log('Server started on port 4000')
})