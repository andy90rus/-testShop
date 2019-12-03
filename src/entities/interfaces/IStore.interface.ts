import { IOrder } from './IOrder.interface';

export interface IStore {
	id: number;
	name: string;
	orders: IOrder[];
}
