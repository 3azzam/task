const db = require("../config/dbConfig");
const { DataTypes, Model } = require("sequelize");

class Seller extends Model {}

Seller.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: db,
    timestamps: true,
  }
);



module.exports = Seller;
