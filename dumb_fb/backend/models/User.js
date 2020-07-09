module.exports = (sequelize,DataTypes) => {
    const model = sequelize.define("User",{
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
        tableName:'users',
        timestamps:false
    })
    model.associate = models => {
        model.hasOne(models.Profile,{foreignKey:'user_id'})
        model.hasMany(models.Comment,{foreignKey:'user_id'})
    }
    return model
}