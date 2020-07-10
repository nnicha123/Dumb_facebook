const db = require('../models')

const  getProfile = async (req,res) => {
    const username = req.params.username
    const profile = await db.Profile.findOne({where:{username:username,user_id:req.user.id}})
    profile ? res.status(200).send(profile) : res.status(400).send({message:'Cannot find user'})
}
        
const addProfile = async (req,res) => {
    const {name,pic,coverpic,gender,username} = req.body
    const newProfile = await db.Profile.create({
        name:name,
        pic:pic,
        coverpic:coverpic,
        gender:gender,
        username:username,
        user_id:req.user.id
    })
    res.status(201).send(newProfile)
}

const modifyProfile = async (req,res) => {
    const targetId = req.params.id
    const {name,pic,coverpic,gender} = req.body

    const item = await db.Profile.findOne({where:{id:targetId,user_id:req.user.id}})
    if(item){
        item.update({
            name:name,
            pic:pic,
            coverpic:coverpic,
            gender:gender
        })
        res.status(200).send({message:'Succesfully Updated'})
    }else{
        res.status(400).send({message:'Unable to update item'})
    }
}
const deleteProfile = async (req,res) => {
    const targetId = req.params.id
    const targetDelete = await db.Profile.findOne({where:{id:targetId,user_id:req.user.id}})
    if(targetDelete){ await targetDelete.destroy()}
    else{ res.status(400).send({message:"Cannot find item"})}
    res.status(400).send()
}

module.exports = {
    addProfile,modifyProfile,deleteProfile,getProfile
}