module.exports = (sequelize, DataTypes) => {
    return sequelize.define('humans',{
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,

        },
        introduce: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        character: {
            type : DataTypes.STRING(2000),
            allowNull: false,
        },
        ssul: {
            type : DataTypes.STRING(2000),
            allowNull: false,
        }
    })
}