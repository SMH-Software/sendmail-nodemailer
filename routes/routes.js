import express from 'express'
import { getHome, postEmail } from '../controllers/controllers.js'
const router = express.Router()

router.get('/', getHome)
router.post('/send', postEmail)

export default router