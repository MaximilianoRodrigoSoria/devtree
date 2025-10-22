import  { Router } from 'express';
import { colorsMessage } from "./config/colorsMessage.js";

const  router = Router();

// Define routes
router.get('/', (req, res) => {
    res.send('Hello World!');
});

/** Autenticacion y  Registro **/
router.post('/auth/register', (req, res) => {
    console.log(colorsMessage.debug(JSON.stringify(req.body)));
    res.send('OK');
});


router.get('/blog', (req, res) => {
    res.send('Blog');
});



export  default router;