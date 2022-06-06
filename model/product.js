const Sequelize = require('sequelize')
const database = require('./db')

const Product = database.define("product",{
    id:{
        type: Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    product_name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    value: Sequelize.FLOAT
})

module.exports = Product;