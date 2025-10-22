import  { Router } from 'express';

const  router = Router();

// Define routes
router.get('/', (req, res) => {
    res.send('Hello World!');
});

/** Autenticacion y  Registro **/
router.post('/auth/register', (req, res) => {
    console.log(req.body);
    res.send('OK');
});


router.get('/blog', (req, res) => {
    res.send('Blog');
});



export  default router;