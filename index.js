require("dotenv").config();
const express = require("express");
const debug = require("debug")("between");
const morgan = require("morgan");
const cors = require("cors")

require("./config/mongooseConfig");

const server = express();
const port = process.env.PORT || 4001;

server.use(cors())
server.use(morgan("dev"));
server.use(express.json());

const weatherRouter = require("./routes/weatherRoute");
server.use("/api", weatherRouter);

server.listen(port, () => { debug(`Server is running on port ${port}`); });

