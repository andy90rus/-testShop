import { BadRequestError, Body, Get, HttpCode, JsonController, Param, Post } from 'routing-controllers';
import { StoreEntity } from '../entities/store.entity';
import { StoreDto } from '../dtos/store.dto';

@JsonController('/stores')
export class StoreController {
	@Get('/')
	public async getAllStores(): Promise<StoreEntity[]> {
		return await StoreEntity.find();
	}

	@Get('/:id')
	public async getStoreById(@Param('id') id: number): Promise<StoreEntity> {
		const store = await StoreEntity.findOne(id);
		if (!store) {
			throw new BadRequestError('Store was not found');
		}
		return store;
	}

	@HttpCode(201)
	@Post('/')
	public async createStore(@Body({validate: true}) store: StoreDto): Promise<StoreEntity> {
		return new StoreEntity(store).save();
	}
}
