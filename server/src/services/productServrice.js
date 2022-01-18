const { Sequelize } = require("sequelize");
const ProductDetails = require("../models/productDetails");
const Seller = require("../models/seller");

class ProductService {
  async search(filters, optionalFields) {
    const details = await ProductDetails.findAll({
      attributes: ["id", "productId", "SellerId", ...optionalFields],
      where: ProductDetails.queryFilters(filters),
      order: ["productId"],
      raw: true,
      nest: true,
    });
    return details;
  }
}

module.exports = ProductService;
