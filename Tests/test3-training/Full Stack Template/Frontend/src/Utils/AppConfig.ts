class AppConfig {
  // Backend urls:
  public readonly audiencesUrl = 'http://localhost:4000/api/audiences/';
  public readonly giftsByAudienceUrl =
    'http://localhost:4000/api/gifts-by-audience/';
  public readonly giftsUrl = 'http://localhost:4000/api/gifts/';

  //Axios options:
  public readonly axiosOptions = {
    headers: {
      // Tell axios to also send the image:
      'Content-Type': 'multipart/form-data', // We're sending also files.
    },
  };
}

export const appConfig = new AppConfig();
