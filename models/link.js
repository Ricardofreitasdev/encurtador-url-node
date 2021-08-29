const Sequelize = require('sequelize');
const database = require('../db');
const moment = require("moment")

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
    },
    createdAt: {
        type: Sequelize.DATE,
      get() {
            return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY');
        }
    },
    updatedAt: {
        type: Sequelize.DATE,
        get() {
            return moment(this.getDataValue('updatedAt')).format('DD/MM/YYYY');
        }
    }
})

module.exports = Link;