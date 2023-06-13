
import dotenv from 'dotenv';
import express from "express";
import { studentRouter } from "./src/routes/student.route.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use("/student", studentRouter)
app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`)
})