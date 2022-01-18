const db = require("../config/dbConfig");
const { DataTypes, Model } = require("sequelize");
const Offer = require("./offer");

class ProductOffers extends Model {}

ProductOffers.init(
  {
    productId: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize: db,
    timestamps: true,
  }
);

Offer.hasMany(ProductOffers);
ProductOffers.belongsTo(Offer);

module.exports = ProductOffers;
