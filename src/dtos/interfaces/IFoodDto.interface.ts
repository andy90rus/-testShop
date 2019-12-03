import { FoodType } from '../../entities/enums/foodType.enum';

export interface IFoodDto {
	id: number;
	price: number;
	name: string;
	description: string;
	foodType: FoodType;
}
