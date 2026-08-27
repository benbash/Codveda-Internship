import express from "express";

import mealRoutes from "./routes/mealRoutes.js";

const app = express();


// Middleware
app.use(express.json());


// Simple CORS middleware
app.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Origin",
        "http://localhost:5173"
    );

    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );

    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );

    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }

    next();
});


// Routes
app.use("/api/meals", mealRoutes);


export default app;