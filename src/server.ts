import  express from 'express';
import router  from "./router.js";

const  app = express();

//Leer datos del formulario en formato JSON
app.use(express.json())

app.use('/', router)

export  default app