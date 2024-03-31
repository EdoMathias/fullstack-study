import dotenv from "dotenv";
dotenv.config();

class AppConfig {
    public readonly port = +process.env.PORT;
}

const appConfig = new AppConfig();

export default appConfig;
