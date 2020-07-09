module.exports = (sequelize,DataTypes) => {
    const model = sequelize.define('Comment',{
        name:{
            type:DataTypes.STRING(255)
        },
        comment:{
            type:DataTypes.STRING(1000)
        },
        date:{
            type:DataTypes.STRING(255)
        }
    },{
        tableName:'comments',
        timestamps:false
    })
    model.associate = models => {
        model.belongsTo(models.User,{foreignKey:'user_id'})
    }
    return model
}