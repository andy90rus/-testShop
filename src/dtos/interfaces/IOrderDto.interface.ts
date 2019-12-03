import { OrderType } from '../enums/orderType.enum';

export interface IOrderDto {
	id: number;
	type: OrderType;
	baseAmount: number;
	storeId: number;

	entityToModel(): void;
}
