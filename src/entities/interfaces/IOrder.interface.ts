import { IStore } from './IStore.interface';
import { OrderType } from '../enums/orderType.enum';

export interface IOrder {
	id: number;
	created: Date;
	baseAmount: number;
	totalAmount: number;
	orderType: OrderType;
	storeId: number;
	store: IStore;
}
