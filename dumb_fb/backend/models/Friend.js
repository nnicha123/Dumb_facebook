module.exports = (sequelize,DataTypes) => {
    const model = sequelize.define('Friend',{
        username:{
            type:DataTypes.STRING(255)
        },
        password:{
            type:DataTypes.STRING(255)
        },
        name:{
            type:DataTypes.STRING(255)
        },
        birthdate:{
            type:DataTypes.STRING(255)
        },
        coverpic:{
            type:DataTypes.STRING(255)
        },
        pic:{
            type:DataTypes.STRING(255)
        },
        gender:{
            type:DataTypes.STRING(10)
        }
    },{
        tableName:'friends',
        timestamps:false
    })
    model.associate = models => {
        model.belongsToMany(models.User,{through:models.Own,foreignKey:'friend_id'})
    }
    return model
}