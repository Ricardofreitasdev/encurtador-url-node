const Sequelize = require('sequelize');
const database = require('../db');

const Link = database.define('link', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    code: {
        type: Sequelize.STRING,
        allowNull: false
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    click: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
    }
})

module.exports = Link;