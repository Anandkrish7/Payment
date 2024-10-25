import express from "express"

const router = express.Router()

import {register, login} from '../controller/auth.js'
import  subscription  from "../controller/subs.js";
import success from "../controller/success.js";
import failure from "../controller/failure.js";
import getSubscription from "../controller/getSubscription.js"

// POST REQUEST
router.post('/register', register);
router.post('/login', login);
router.post('/create-subscription', subscription)
router.post('/success', success)
router.post('/failure', failure)

// GET REQUEST
router.get('/get-subscription', getSubscription)


export default router