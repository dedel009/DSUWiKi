module.exports = (sequelize, DataTypes) => {
    return sequelize.define('restaurants',{
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,

        },
        overview: {
            type: DataTypes.STRING(2000),
            allowNull: false,
        },
        menu: {
            type: DataTypes.STRING(2000),
            allowNull: false,
        },
        tip: {
            type : DataTypes.STRING(2000),
            allowNull: false,
        }
    })
}