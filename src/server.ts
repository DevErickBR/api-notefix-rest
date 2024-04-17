import express from "express";
import path from "path"
import dotenv from "dotenv";
import MainRouter from "./router/MainRouter"
import cors from "cors";

dotenv.config;

const server = express();

server.use(cors({
    origin: "*"
}));

const moment = require('moment-timezone');
moment.tz.setDefault('America/Sao_Paulo');


server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));


server.use(MainRouter)


server.use((req, res) => {
    res.status(404)
    res.json('Endpoint não encontrado!')
});


server.listen(process.env.PORT);
