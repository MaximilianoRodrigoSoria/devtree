import  mongoose  from 'mongoose';
import { colorsMessage } from "./colorsMessage.js";
export  const  connectDB = async () => {
    try {
        const url=process.env.MONGODB_URI;
        const { connection } = await mongoose.connect(url);
        const dataConnect = `${connection.host}:${connection.port}/${connection.name}`;
        console.log(colorsMessage.info('Connected to MongoDB: ' + dataConnect));
        return connection;
    } catch (error) {
        console.error(colorsMessage.error('Error connecting to MongoDB:'), error);
        process.exit(1);
    }
}