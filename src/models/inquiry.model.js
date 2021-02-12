const DB = require('./../../config/db');
const { DataTypes } = require('sequelize');
const Inquiry = DB.define('Inquiry', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    address: {
        type: DataTypes.STRING
    },
    service: {
        type: DataTypes.STRING
    },
    serviceDescription: {
        type: DataTypes.STRING
    },
    dateOfVisit: {
        type: DataTypes.DATE
    }
});

module.exports = Inquiry;