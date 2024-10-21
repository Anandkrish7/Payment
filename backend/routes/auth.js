import express from "express"

const router = express.Router()

import {register, login} from '../controller/auth.js'
import  subscription  from "../controller/subs.js";


router.post('/register', register);
router.post('/login', login);
router.post('/create-subscription', subscription)

export default router