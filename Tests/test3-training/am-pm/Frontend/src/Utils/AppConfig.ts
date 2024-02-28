class AppConfig {
  // Backend urls:
  public readonly categoriesUrl = 'http://localhost:4000/api/categories/';
  public readonly productsByCategoryUrl =
    'http://localhost:4000/api/products-by-category/';
  public readonly productsUrl = 'http://localhost:4000/api/products/';

  //Axios options:
  public readonly axiosOptions = {
    headers: {
      // Tell axios to also send the image:
      'Content-Type': 'multipart/form-data', // We're sending also files.
    },
  };
}

export const appConfig = new AppConfig();
