const { Sequelize, DataTypes } = require('sequelize')
// const sequelize = new Sequelize('postgres')
const sequelize = require('../db')

const Product = sequelize.define("products",{
    id:{
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    value: DataTypes.FLOAT
})

module.exports = Product;