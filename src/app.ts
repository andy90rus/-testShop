import 'reflect-metadata';
import * as express from 'express';
import { useContainer, createExpressServer } from 'routing-controllers';
import {Config} from './config';
import { OrderController } from './controllers/order.controller';
import { StoreController } from './controllers/store.controller';
import Container from 'typedi';
import { DataBaseService } from './dataBase.service';
import { ShopController } from './controllers/shop.controller';
import { FoodController } from './controllers/food.controller';
import { MovieController } from './controllers/movie.controller';

class App {
    public app: express.Application;
    constructor(
        private _dataBaseService: DataBaseService,
        private _config: Config,
    ) {
        useContainer(Container);
        this._dataBaseService.connect()
            .then(() => console.log('database connected'))
            .catch((err) => console.error('database error', err));
        this.app = createExpressServer({
            routePrefix: '/api',
            controllers: [
                OrderController,
                StoreController,
                ShopController,
                FoodController,
                MovieController,
            ]
        });
        this.app.listen(_config.port);
    }
}

export function createServer() {
    const config = Container.get(Config);
    const dataBaseService = Container.get(DataBaseService);
    new App(dataBaseService, config);
}
