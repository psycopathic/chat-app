import express from 'express';
import authRoutes from './routers/authRoutes.js'
import messageRoutes from './routers/messageRoutes.js'
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';


//initialization
dotenv.config();
const app = express();
const port = process.env.PORT|| 5000;

//middleware
app.use(express.json());
app.use('/api/auth',authRoutes);
app.use('/api/message',messageRoutes);
app.use(cookieParser());



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    connectDB();
})
