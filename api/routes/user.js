import express from 'express'
import { register} from '../controller/user.js';

const router = express.Router();

// user register
router.post("/register", register);




export default router