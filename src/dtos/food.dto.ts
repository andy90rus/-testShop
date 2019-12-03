import { IsDefined, IsEnum, IsNumber } from 'class-validator/decorator/decorators';
import { IFood } from '../entities/interfaces/IFood.interface';
import { FoodType } from '../entities/enums/foodType.enum';

export class FoodDto implements IFood {
	public id: number;
	@IsDefined({message: 'Name Amount is required field '})
	public name: string;
	@IsDefined({message: 'Description Amount is required field '})
	public description: string;
	@IsDefined({message: 'Food type is required field '})
	@IsEnum(FoodType)
	public foodType: FoodType;
	@IsDefined({message: 'Price is required field '})
	@IsNumber()
	public price: number;

	public entityToModel(): void {
	}
}
