class AppConfig {
  public readonly port = 4000;
  public readonly mySqlHost = 'localhost';
  public readonly mySqlUser = 'root';
  public readonly mySqlPassword = 'G4m1ngmathias!';
  public readonly mySqlDatabase = 'northwind';
  public readonly jwtSecretKey = 'Make things go right!';
  public readonly baseImageUrl = 'http://localhost:4000/api/products/images/';
}

export const appConfig = new AppConfig();
