module.exports = (sequelize, DataTypes) => {
    return sequelize.define('plays',{
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,

        },
        sort: {
            type: DataTypes.STRING(400),
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