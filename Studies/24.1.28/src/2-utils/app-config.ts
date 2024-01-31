class AppConfig {
  public readonly port = 4000;
  public readonly mySqlHost = 'localhost';
  public readonly mySqlUser = 'root';
  public readonly mySqlPassword = 'G4m1ngmathias!';
  public readonly mySqlDatabase = 'northwind';
}

export const appConfig = new AppConfig();
