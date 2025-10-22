import server from "./server.js";
import { connectDB } from "./config/db.js";

const  PORT = process.env.PORT || 3000

connectDB()
server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
})

