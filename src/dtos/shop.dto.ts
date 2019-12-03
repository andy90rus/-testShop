import { IsDefined, IsNumber } from 'class-validator/decorator/decorators';
import { IShop } from '../entities/interfaces/IShop.interface';

export class ShopDto implements IShop {
	public id: number;
	@IsDefined({message: 'Name Amount is required field '})
	public name: string;
	@IsDefined({message: 'Description Amount is required field '})
	public description: string;
	@IsDefined({message: 'Price is required field '})
	@IsNumber()
	public price: number;
	@IsDefined({message: 'Brand is required field '})
	public brand: string;

	public entityToModel(): void {
	}
}
