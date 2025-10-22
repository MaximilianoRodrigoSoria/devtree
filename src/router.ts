import  { Router } from 'express';
import {createAccount} from "./handlers/index.js";
import  {body}   from "express-validator";

const  router = Router();

// Define routes
router.get('/', (req, res) => {
    res.send('Hello World!');
});

/** Autenticacion y  Registro **/
router.post('/auth/register',
    body('handle').notEmpty().withMessage('Handle is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('name').notEmpty().withMessage('Name is required'),
    createAccount)


router.get('/blog', (req, res) => {
    res.send('Blog');
});



export  default router;