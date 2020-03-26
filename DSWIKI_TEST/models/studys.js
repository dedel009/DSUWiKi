module.exports = (sequelize, DataTypes) => {
    return sequelize.define('studys',{
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,

        },
        explain: {
            type: DataTypes.STRING(2000),
            allowNull: false,
        },
        tip: {
            type : DataTypes.STRING(2000),
            allowNull: false,
        }
    })
}