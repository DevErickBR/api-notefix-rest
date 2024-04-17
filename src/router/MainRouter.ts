import { Router } from "express";
import * as homeController from "../controllers/homeController"
import * as clientsController from "../controllers/clientsController"
import * as aparelhosController from "../controllers/aparelhosController"
import dotenv from "dotenv"

dotenv.config()

const router = Router()

router.get("/", homeController.Home)

router.get("/ping", (req, res) => {
    res.json({ pong: true })
    console.log(process.env.MYSQL_DB as string,
        process.env.MYSQL_USER as string,
        process.env.MYSQL_PASSWORD as string,)
})

router.get("/clientes", clientsController.Clients)
router.get("/clientes/cliente/:slug", clientsController.Client)

router.get("/aparelhos", aparelhosController.Aparelhos)

export default router