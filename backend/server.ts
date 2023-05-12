import {Express} from "express";
import {Request, Response} from "express";

const express = require("express");
const server: Express = express();

server.get("/home", (req: Request, res: Response) => {res.send("Hello")});
server.get("/component", (req: Request, res: Response) => {res.send("Component")});
server.get("/product_name", (req: Request, res: Response) => {res.send("Product")});
server.get("/cart", (req: Request, res: Response) => {res.send("My Cart")});

server.listen(420)


