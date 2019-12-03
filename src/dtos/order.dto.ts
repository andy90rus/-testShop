import { IsDefined } from 'class-validator/decorator/decorators';
import { IOrderDto } from './interfaces/IOrderDto.interface';
import { OrderType } from './enums/orderType.enum';

export class OrderDto implements IOrderDto {
	public id: number;
	@IsDefined({message: 'Type is required field '})
	public type: OrderType;
	@IsDefined({message: 'Name is required field'})
	public name: string;
	@IsDefined({message: 'BaseAmount is required field'})
	public baseAmount: number;
	@IsDefined({message: 'StoreId is required field'})
	public storeId: number;
	@IsDefined({message: 'TotalAmount is required field'})
	public totalAmount: number;

	public entityToModel(): void {
	}
}
