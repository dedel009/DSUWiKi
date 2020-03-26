module.exports = (sequelize, DataTypes) => {
    return sequelize.define('circles',{
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,

        },
        overview: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        activity: {
            type: DataTypes.STRING(2000),
            allowNull: false,
        },
        repute: {
            type: DataTypes.STRING(2000),
            allowNull: false,
        },
        tip: {
            type : DataTypes.STRING(2000),
            allowNull: false,
        }
    })
}