class DevelopmentConfig {
  // Backend urls:
  public readonly vacationsUrl = 'http://localhost:4000/api/vacations/';
  public readonly vacationsByUserUrl =
    'http://localhost:4000/api/vacations-by-user/';
  public readonly registerUrl = 'http://localhost:4000/api/register/';
  public readonly loginUrl = 'http://localhost:4000/api/login/';
  public readonly likeUrl = 'http://localhost:4000/api/like/';

  //Axios options:
  public readonly axiosOptions = {
    headers: {
      // Tell axios to also send the image:
      'Content-Type': 'multipart/form-data', // We're sending also files.
    },
  };
}

class ProductionConfig {
  // Backend urls:
  public readonly vacationsUrl = 'http://localhost:81/api/vacations/';
  public readonly vacationsByUserUrl =
    'http://localhost:81/api/vacations-by-user/';
  public readonly registerUrl = 'http://localhost:81/api/register/';
  public readonly loginUrl = 'http://localhost:81/api/login/';
  public readonly likeUrl = 'http://localhost:81/api/like/';

  //Axios options:
  public readonly axiosOptions = {
    headers: {
      // Tell axios to also send the image:
      'Content-Type': 'multipart/form-data', // We're sending also files.
    },
  };
}

// For local development:
// export const appConfig = new DevelopmentConfig();

// For docker:
export const appConfig = new ProductionConfig();
