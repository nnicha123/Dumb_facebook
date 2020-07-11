module.exports = (sequelize,DataTypes) => {
    const model = sequelize.define('Own',{},{
        tableName:'owns',
        timestamps:false
    })
    return model
}