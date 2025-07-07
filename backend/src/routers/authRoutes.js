import express from 'express'
import { signin, signup, login } from '../controllers/authControllers.js';
const route = express.Router();

route.post('/signup', signup)
route.get('/signin', signin)
route.get('/login', login)

export default route