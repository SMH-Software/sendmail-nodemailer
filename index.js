import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import allRoutes from './routes/routes.js'

const app = express()
dotenv.config()

//Template Run
app.set('view engine', 'ejs')

//Midlleware
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//Routes 
app.use('/', allRoutes)

//listen Port 
app.listen(process.env.PORT, () => console.log(`Server Running on Port: http://localhost:${process.env.PORT}`))

