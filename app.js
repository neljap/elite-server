const express = require("express")
const app = express()

app.use("/api/v1/user", tourUser)


module.exports = app;