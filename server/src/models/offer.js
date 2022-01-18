const db = require("../config/dbConfig");
const { DataTypes, Model } = require("sequelize");
const Seller = require("./seller");

class Offer extends Model {}

Offer.init(
  {
    percentage: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize: db,
    timestamps: true,
  }
);

Seller.hasMany(Offer);
Offer.belongsTo(Seller);

module.exports = Offer;
