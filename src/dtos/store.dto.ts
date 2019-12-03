import { IsDefined } from 'class-validator/decorator/decorators';
import { IStoreDto } from './interfaces/IStoreDto.interface';

export class StoreDto implements IStoreDto {
	@IsDefined({message: 'Name field is required'})
	public name: string;

	public entityToModel() {

	}
}
