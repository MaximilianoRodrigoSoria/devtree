import  { Router } from 'express';

const  router = Router();

// Define routes
router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/nosotros', (req, res) => {
    res.send('Nosotros');
});


router.get('/blog', (req, res) => {
    res.send('Blog');
});



export  default router;