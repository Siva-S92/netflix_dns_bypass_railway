import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import { userRouter } from "./routes/userRoute.js";
import { moviesRouter } from "./routes/moviesRoute.js";
import { createProxyMiddleware } from "http-proxy-middleware";
import https from "https";
import cookieParser from 'cookie-parser'
import path from "path";
// import serverless from 'serverless-http' // it is for AWS Lambda function

//config the env variables
dotenv.config();

//server setup
const app = express();
const PORT = process.env.PORT || 8000;

//using middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

// Handle preflight requests for all routes
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(cookieParser())


//database Connection
databaseConnection();

//routes
app.get("/wish", async (req, res) => {
  res.send("Hello World")
})
app.use("/api/user", userRouter);
app.use("/proxy/tmdb", moviesRouter);
// Proxy endpoint to forward requests to TMDB
app.use(
  "/tmdb-images",
  createProxyMiddleware({
    target: "https://image.tmdb.org", // Use the domain, not the IP
    changeOrigin: true, // Change origin to target
    secure: true, // Validate SSL certificates
    pathRewrite: {
      "^/tmdb-images": "", // Strip '/tmdb-images' from the start of the path
    },
    onProxyReq(proxyReq, req, res) {
      // Set Host header to image.tmdb.org for correct SSL handshake
      proxyReq.setHeader("Host", "image.tmdb.org");
    },
    onError(err, req, res) {
      res.status(500).send("Proxy error occurred: " + err.message);
    },
    agent: new https.Agent({ rejectUnauthorized: false }), // Disable SSL validation
  })
);

// Server Listening on the port
app.listen(PORT, () => {
  console.log("server running on the PORT:", PORT);
});


// export const handler = serverless(app) //this is for aws lambda







