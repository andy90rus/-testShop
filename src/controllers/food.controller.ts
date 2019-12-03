import { BadRequestError, Body, Delete, Get, HttpCode, JsonController, Param, Post } from 'routing-controllers';
import { FoodEntity } from '../entities/food.entity';
import { FoodDto } from '../dtos/food.dto';

@JsonController('/foods')
export class FoodController {
	@Get('/')
	public async getAllFoods(): Promise<FoodEntity[]> {
		return await FoodEntity.find();
	}

	@Get('/:id')
	public async getFoodById(@Param('id') id: number): Promise<FoodEntity> {
		const food = await FoodEntity.findOne(id);
		if (!food) {
			throw new BadRequestError('Food item was not found.');
		}
		return food;
	}

	@HttpCode(201)
	@Post('/')
	public async createFoodItem(@Body({validate: true}) food: FoodDto): Promise<FoodEntity> {
		return new FoodEntity(food).save();
	}

	@Delete('/:id')
	public async deleteFoodItem(@Param('id') id: number): Promise<{message: string}> {
		await FoodEntity.delete(id);
		return {message: `Food with id was deleted successfully`}
	}
}
