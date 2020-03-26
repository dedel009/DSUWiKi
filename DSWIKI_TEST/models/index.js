


const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {}

const sequelize = new Sequelize(config.database, config.username, config.password, config);



db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.humans = require('./humans')(sequelize,Sequelize);
db.studys = require('./studys')(sequelize,Sequelize);
db.restaurants = require('./restaurants')(sequelize,Sequelize);
db.plays = require('./plays')(sequelize,Sequelize);
db.circles = require('./circles')(sequelize,Sequelize);

db.searchs = require('./searchs')(sequelize,Sequelize);

module.exports = db;
