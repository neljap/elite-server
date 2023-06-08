const express = require("express")
const app = express()
const cors = require("cors")


const tourRouter = require("./routers/userRoute")



app.use("/api/v1/user", tourRouter)

module.exports = app;