import { IStore } from './IStore.interface';

export interface IOrder {
	id: number;
	created: Date;
	baseAmount: number;
	totalAmount: number;
	storeId: number;
	store: IStore;
}
