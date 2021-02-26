import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

export const getHome = (req, res) => {
    res.render('index')
}

export const postEmail = (req, res) => {
    const transporter = nodemailer.createTransport({
        service: process.env.SERVICE,
        auth:{
           user: process.env.USER,
           pass: process.env.PASS
        },
        tls:{
            rejectUnauthorized: false
        }
    })
    
    const mailOptions = {
        from: process.env.USER,
        to: req.body.email,
        subject: process.env.SUBJECT,
        text: req.body.message
    }
    
    transporter.sendMail(mailOptions, (err, data) => {
        if(err){
            console.log(err)
        }else{
            res.render('index', {message: "email envoyé avec succes."})
        }
        
    })
}

