import {User} from "../models/User.js";
import type {Request, Response} from "express";
import {colorsMessage} from "../config/colorsMessage.js";

export  const  createAccount  =  async (req: Request, res: Response) => {
    const {email, password, name} = req.body;
    console.log(colorsMessage.debug('Creating user with email:'+ email));
    const userExists = await  User.findOne({ email });
    if(userExists){
        return res.status(400).send('User already exists');
    }
    const user = new User(req.body)
    await User.create(user);
    res.send('User created successfully');
};