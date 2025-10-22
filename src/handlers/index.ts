import {User} from "../models/User.js";
import type {Request, Response} from "express";
import {colorsMessage} from "../config/colorsMessage.js";
import {hashPassword} from "../utils/auth.js";
import * as slugifyModule from "slugify";
const slugify = (slugifyModule as any).default || slugifyModule;
export  const  createAccount  =  async (req: Request, res: Response) => {
    const {email, password, handle} = req.body;
    console.log(colorsMessage.debug('Creating user with email:'+ email + ' handle:' + (handle || '')));

    // Validar que handle exista y no sea vacío
    if (!handle || typeof handle !== 'string' || !handle.trim()) {
        const msg = 'Handle is required';
        console.log(colorsMessage.error(msg));
        return res.status(400).json({ error: msg });
    }

    // Aplicar slug al handle y comprobar que no quede vacío
    const slugHandle = slugify(handle, { replacement: '_', lower: true, strict: true });

     console.log(slugHandle)

    // Comprobar si existe usuario con mismo email o handle sluggeado (usar objeto como filtro para evitar ObjectParameterError)
    const userExists = await User.findOne({ $or: [ { email }, { handle: slugHandle } ] });
    if(userExists){
        const  error = new Error('User already exists');
        // Logear error coloreado antes de responder
        console.log(colorsMessage.error(error.message));
        return res.status(400).json({ error: error.message });
    }

    // Crear usuario asegurando que el handle guardado sea el sluggeado
    const user = new User(req.body);
    user.password = await hashPassword(password);
    user.handle = slugHandle;
    await User.create(user);
    res.send('User created successfully');
};
