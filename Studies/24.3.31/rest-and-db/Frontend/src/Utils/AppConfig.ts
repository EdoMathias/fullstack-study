class DevelopmentConfig {
  public readonly productsUrl = 'http://localhost:81/api/products/';
}

class ProductionConfig {
  public readonly productsUrl = 'http://35.93.128.146:81/api/products/';
}

// const appConfig = new DevelopmentConfig();
const appConfig = new ProductionConfig();

export default appConfig;
