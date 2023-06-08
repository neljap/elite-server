const User = require("../models/userModels")

exports.getAllUsers = async(req, res) => {

    try{
        const users = await User.find()
            res.status(200).json({
                status: "success",
                data:{
                    users
                }
            })
    }catch(err) {
        res.status(404).json({
            status: "fail",
            message: err
        })
    }
}

exports.getUser = async(req, res) => {
    try {
        const getUser = await User.findById(req.params.id)
        res.status(200).json({
            status: "success",
            data: {
                getUser
            }
        })

    }catch(err) {
            res.status(404).json({
            status: "fail",
            message: err
        })
    }
}

exports.createNewUser = async(req, res) => {
    try {

    }catch(err) {

    }
}

exports.deleteUser = async(req, res) => {
    try{

    }catch(err) {

    }
}