const db = require('../models')
const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerUser = async(req,res) => {
    const {name,birthdate,coverpic,pic,gender,username,password} = req.body
    const invalidUsername = await db.User.findOne({where:{username:username}})
    if(invalidUsername) req.status(400).send({message:'Username already taken'})
    else{
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password,salt)
        const addUser = await db.User.create({
            name:name,
            birthdate:birthdate,
            coverpic:coverpic,
            pic:pic,
            gender:gender,
            username:username,
            password:hashedPassword
        })
        res.status(201).send(addUser,{message:'Successfully registered'})
    }
    
}


module.exports = {
    registerUser
}