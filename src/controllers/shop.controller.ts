import { BadRequestError, Body, Delete, Get, HttpCode, JsonController, Param, Post } from 'routing-controllers';
import { ShopEntity } from '../entities/shop.entity';
import { ShopDto } from '../dtos/shop.dto';

@JsonController('/shops')
export class ShopController {
	@Get('/')
	public async getAllShops(): Promise<ShopEntity[]> {
		return await ShopEntity.find();
	}

	@Get('/:id')
	public async getShopById(@Param('id') id: number): Promise<ShopEntity> {
		const food = await ShopEntity.findOne(id);
		if (!food) {
			throw new BadRequestError('Shop item was not found.');
		}
		return food;
	}

	@HttpCode(201)
	@Post('/')
	public async createShopItem(@Body({validate: true}) shop: ShopDto): Promise<ShopEntity> {
		return new ShopEntity(shop).save();
	}

	@Delete('/:id')
	public async deleteShopsItem(@Param('id') id: number): Promise<{message: string}> {
		await ShopEntity.delete(id);
		return {message: `Shop with id was deleted successfully`}
	}
}
