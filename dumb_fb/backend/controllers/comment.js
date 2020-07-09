const db = require('../models')

const postComment = async (req, res) => {
    const {name,comment,date} = req.body
    const newComment = await db.Comment.create({
        name:name,
        comment:comment,
        date:Date.now(),
        user_id:req.user.id
    })
    res.status(201).send(newComment)
}
const deleteComment = async(req,res) => {
    const deleteItem = Number(req.params.id)
    const targetItem = await db.Comment.findOne({where:{id:deleteItem,user_id:req.user.id}})
    if(targetItem) {await targetItem.destroy()}
    else {res.status(400).send({message:"Item not found"})}
    res.status(400).send()
}
const modifyComment = async(req,res) => {
    const targetId = req.params.id
    const {name,comment,date} = req.body
    const targetComment = await db.Comment.findOne({where:{id:targetId,user_id:req.user.id}})
    if(targetComment){
        targetComment.update({
            name:name,
            comment:comment,
            date:Date.now()
        })
        res.status(200).send({message:'updated comment'})
    }
    else{
        res.status(400).send({message:'Cannot find item'})
    }
}
 
module.exports = {
    postComment,modifyComment,deleteComment
}