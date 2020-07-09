module.exports = (sequelize,DataTypes) => {
    const model = sequelize.define('Profile',{
        name:{
            type:DataTypes.STRING(255)
        },
        pic:{
            type:DataTypes.STRING(255)
        },
        coverpic:{
            type:DataTypes.STRING(255)
        },
        gender:{
            type:DataTypes.STRING(10)
        }
    },{
        tableName:'profiles',
        timestamps:false
    })
    model.associate = models => {
        model.belongsTo(models.User,{foreignKey:'user_id'})
    }
    return model
}