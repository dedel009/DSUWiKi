module.exports = (sequelize, DataTypes) => {
    return sequelize.define('searchs',{
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,

        },
        kategorie: {
            type: DataTypes.STRING(20),
            allowNull: false,
        }
    })
}