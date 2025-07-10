import express from 'express';
import authRoutes from './routers/authRoutes.js'
import messageRoutes from './routers/messageRoutes.js'
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';


//initialization
dotenv.config();
const app = express();
const port = process.env.PORT|| 5000;

//middleware
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use('/api/auth',authRoutes);
app.use('/api/message',messageRoutes);



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    connectDB();
})
