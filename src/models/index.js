const dbConfig = require("../../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


// db.tutorials = require("./tutorial.model")(sequelize, Sequelize);
// db.staff = require("./employees.model")(sequelize, Sequelize);
// db.corporates = require("./companies.model")(sequelize, Sequelize);
db.userModel = require("./User")(sequelize, Sequelize);
db.stagingActionModel = require("./StageActions")(sequelize, Sequelize);

module.exports = db;