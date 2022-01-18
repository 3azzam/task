const db = require("../config/dbConfig");
const { DataTypes, Model } = require("sequelize");
const Seller = require("./seller");
const Offer = require("./offer");

class ProductDetails extends Model {
  static queryFilters({ productIds }) {
    return {
      productId: productIds,
    };
  }
}

ProductDetails.init(
  {
    productId: { type: DataTypes.INTEGER, allowNull: false },
    availability: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize: db,
    timestamps: true,
  }
);

Seller.hasMany(ProductDetails);
ProductDetails.belongsTo(Seller);

module.exports = ProductDetails;
