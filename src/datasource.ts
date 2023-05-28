import { DataSource } from "typeorm";

export const appDataSource = new DataSource(({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'test',
        entities: [],
        synchronize: true,
      }
));