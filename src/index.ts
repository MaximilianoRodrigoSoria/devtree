import server from "./server.js";
import { connectDB } from "./config/db.js";
import { colorsMessage } from "./config/colorsMessage.js";
const  PORT = process.env.PORT || 3000

connectDB()
server.listen(PORT, () => {
        console.log(colorsMessage.debug(`Server is running on http://localhost:${PORT}`))
})

