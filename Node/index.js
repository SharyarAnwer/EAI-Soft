const express = require('express')

const morgan = require('morgan')

const router = require('./routes/post')

const app = express()

const myOwnMiddleWare = (req , res , next) => {

    console.log("THIS IS MY OWN MIDDLEWARE FOR FUCK'S SAKE!")

    next()
}

app.use(morgan("dev"))

app.use("/" , router)

app.use("/do" , myOwnMiddleWare , router)

app.listen(8080 , () => {
    console.log("Your server is running on port 8080")
})