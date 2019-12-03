import { IsDefined, IsNumber } from 'class-validator/decorator/decorators';
import { IMovie } from '../entities/interfaces/IMovie.interface';

export class MovieDto implements IMovie {
	public id: number;
	@IsDefined({message: 'Name Amount is required field '})
	public name: string;
	@IsDefined({message: 'Description Amount is required field '})
	public description: string;
	@IsDefined({message: 'Price is required field '})
	@IsNumber()
	public price: number;
	@IsDefined({message: 'Duration is required field '})
	@IsNumber()
	public duration: number;
	@IsDefined({message: 'Genre is required field '})
	public genre: string;

	public entityToModel(): void {
	}

}
