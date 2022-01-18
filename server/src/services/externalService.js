class ExternalProductsService {
  constructor(requestInstance) {
    this.requestInstance = requestInstance;
  }
  
  async getProducts(options) {
    return this.requestInstance(options);
  }
}

module.exports = ExternalProductsService;
