const _ = require("lodash");
const ProductService = require("../services/productServrice");
const ExternalProductsService = require("../services/externalService");

const { searchMapper } = require("../mappers/productsMappers");
const { request, requestTypes } = require("../networking/baseInstance");
const { searchProductFilter } = require("../filters/productsFilter");
const { externalProductUri } = require("../config/appConfig");

const productService = new ProductService();
const externalProductsService = new ExternalProductsService(request);

const search = async (req, res, next) => {
  try {
    const filters = searchProductFilter(req.query);
    const externalProductsData = await externalProductsService.getProducts({
      type: requestTypes.GET,
      uri: `${externalProductUri}?q=${filters.q}&page=${filters.page}`,
    });

    const { data, meta } = externalProductsData.data;
    const productsData = await productService.search(
      {
        productIds: data.map((p) => p.id),
      },
      filters.fields.filter((field) => field !== "seller_count")
    );

    const excludedFields = ["price", "seller_count"].filter(
      (key) => !filters.fields.includes(key)
    );
    return res.send({
      data: searchMapper(data, productsData, excludedFields),
      meta,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  search,
};
