import { FoodType } from '../enums/foodType.enum';

export interface IFood {
	id: number;
	price: number;
	name: string;
	description: string;
	foodType: FoodType;
}

