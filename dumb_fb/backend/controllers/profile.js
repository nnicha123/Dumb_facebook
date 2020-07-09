const db = require('../models')

const addProfile = async (req,res) => {
    const {name,pic,coverpic,gender} = req.body
    const newProfile = await db.Profile.create({
        name:name,
        pic:pic,
        coverpic:coverpic,
        gender:gender,
        user_id:req.user.id
    })
    res.status(201).send(newProfile)
}

module.exports = {
    addProfile
}