import {createConnection, Connection} from 'typeorm';
import {Service} from 'typedi';
import { config } from './config';

@Service()
export class DataBaseService {
    private connection: Promise<Connection>;
    constructor() {
        this.connection = createConnection({
            type: "mysql",
            host: config.database.host,
            port: 3306,
            username: "root",
            password: "pass",
            database: "store",
            extra: {insecureAuth: true},
            synchronize: true, //turn off this option on production!!!
            dropSchema: false,
            migrationsRun: false,
            logging: true,
            entities: [
                "dist/entities/*.js"
            ],
            migrations: [
                "out/migration/**/*.js"
            ],
            subscribers: [
                "out/subscriber/**/*.js"
            ],
            cli: {
                "entitiesDir": "src/models",
                "migrationsDir": "src/migration",
                "subscribersDir": "src/subscriber"
            }
        });
    }

    public connect() {
        return this.connection.then((connection) => connection.synchronize());
    }
}
