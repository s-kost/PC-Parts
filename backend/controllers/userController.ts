import {Request, Response} from "express";
import {UserModel} from "../models/userModel";

export const getUser = (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
    const userModel = new UserModel();
    const user = userModel.getUsers(userId);
    res.send( {
        id: userId,
        username: "smnkst"
        });
}