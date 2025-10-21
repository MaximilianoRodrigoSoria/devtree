import  express from 'express';


const app = express();
const port = process.env.PORT || 3000;

//Routing
app.get('/', (req, res) => {
        res.send('Hello World!');
})

app.get('/ecommerce', (req, res) => {
        res.send('This is ecommerce!');
})

app.listen(port, () => {
        console.log('Server is running on http://localhost:' + port);
})