import { Router } from 'express'
import { login, logout, signup } from '../../backend/controllers/user.js';

const authRouter = Router();

authRouter
    .post("/signup", signup)
    .post('/login', login)
    .post('/logout', logout)

export default authRouter