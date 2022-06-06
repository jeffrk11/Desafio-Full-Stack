const Sequelize = require('sequelize');
//TODO: Colocar variaveis em arquivo .env
const sequelize = new Sequelize("postgres","postgres","123", {
        host: 'localhost',
        dialect:'postgres',
        port:5432
    });

module.exports = sequelize;