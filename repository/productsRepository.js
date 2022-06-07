const sequelize = require('../db');
const Product = require('../model/product');

module.exports = {
    findAll: function(){
        return Product.findAll();
    }
}