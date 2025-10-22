import  { Router } from 'express';
import {createAccount} from "./handlers/index.js";

const  router = Router();

// Define routes
router.get('/', (req, res) => {
    res.send('Hello World!');
});

/** Autenticacion y  Registro **/
router.post('/auth/register', createAccount)


router.get('/blog', (req, res) => {
    res.send('Blog');
});



export  default router;