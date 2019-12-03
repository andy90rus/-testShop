import { BadRequestError, Body, Delete, Get, HttpCode, JsonController, Param, Post } from 'routing-controllers';
import { MovieEntity } from '../entities/movie.entity';
import { MovieDto } from '../dtos/movie.dto';

@JsonController('/movies')
export class MovieController {
	@Get('/')
	public async getAllShops(): Promise<MovieEntity[]> {
		return await MovieEntity.find();
	}

	@Get('/:id')
	public async getShopById(@Param('id') id: number): Promise<MovieEntity> {
		const movie = await MovieEntity.findOne(id);
		if (!movie) {
			throw new BadRequestError('Movie item was not found.');
		}
		return movie;
	}

	@HttpCode(201)
	@Post('/')
	public async createShopItem(@Body({validate: true}) movie: MovieDto): Promise<MovieEntity> {
		return new MovieEntity(movie).save();
	}

	@Delete('/:id')
	public async deleteShopsItem(@Param('id') id: number): Promise<{message: string}> {
		await MovieEntity.delete(id);
		return {message: `Movie with id was deleted successfully`}
	}
}
