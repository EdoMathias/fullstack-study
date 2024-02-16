class AppConfig {
  public readonly port = 4000;
  public readonly mySqlHost = 'localhost';
  public readonly mySqlUser = 'root';
  public readonly mySqlPassword = 'G4m1ngmathias!';
  public readonly mySqlDatabase = 'northwind';
  public jwtSecretKey = 'Make things go right!';
}

export const appConfig = new AppConfig();
