const db = require('../models')
const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {
    const { name, birthdate, coverpic, pic, gender, username, password } = req.body
    const invalidUsername = await db.User.findOne({ where: { username: username } })
    if (invalidUsername) { res.status(400).send({ message: 'Username already taken' }) }
    else {
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)
        const addUser = await db.User.create({
            name: name,
            birthdate: birthdate,
            coverpic: coverpic,
            pic: pic,
            gender: gender,
            username: username,
            password: hashedPassword
        })
        res.status(201).send({ addUser, message: 'Successfully registered' })
    }
}
const loginUser = async (req, res) => {
    const { username, password } = req.body
    const user = await db.User.findOne({ where: { username: username } })
    if (!user) res.status(400).send({ message: 'User not found' })
    else {
        const correctPassword = bcrypt.compareSync(password, user.password)
        if (correctPassword) {
            const payload = {
                name: user.name,
                id: user.id
            }
            const token = jwt.sign(payload, process.env.SECRET_OR_KEY, { expiresIn: 3600 })
            res.status(200).send({ token,message: 'Logged In' })
    }
        else {
    res.status(400).send({ message: 'User not found' })
}
    }
}

module.exports = {
    registerUser, loginUser
}