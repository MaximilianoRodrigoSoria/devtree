import  mongoose  from 'mongoose';

export  const  connectDB = async () => {
    try {
        const url=process.env.MONGODB_URI || 'mongodb://user:password@localhost:27017/devtreedb?authSource=admin';
        const { connection } = await mongoose.connect(url);
        const dataConnect = `${connection.host}:${connection.port}/${connection.name}`;
        console.log('Connected to MongoDB: ' + dataConnect);
        return connection;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}