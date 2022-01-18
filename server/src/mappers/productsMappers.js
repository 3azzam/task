const _ = require("lodash");

const searchMapper = (products, productsDetails, excludedFields = []) => {
  const groupedDetails = _.groupBy(productsDetails, "productId");
  return products.map((p) => {
    const productData = groupedDetails[`${p.id}`];
    if (!productData) return p;

    const minmumPrice = _.minBy(productData, "price");

    return _.omit(
      {
        ...p,
        ...minmumPrice,
        seller_count: productData.length,
      },
      excludedFields
    );
  });
};

module.exports = {
  searchMapper,
};
