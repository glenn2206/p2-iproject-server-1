'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.User, {foreignKey: 'userId'})
      Booking.belongsTo(models.TravelPost, {foreignKey: 'postId'})
    }
  }
  Booking.init({
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    amount: {
      type: DataTypes.INTEGER
    },
    paymentStatus: {
      type: DataTypes.BOOLEAN,
      default: false
    },
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};