import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IFood } from './interfaces/IFood.interface';
import { IMovie } from './interfaces/IMovie.interface';

@Entity({name: 'movies'})
export class MovieEntity extends BaseEntity implements IMovie {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column({type: 'varchar'})
	public description: string;

	@Column({type: 'varchar'})
	public name: string;

	@Column({type: 'decimal', scale: 2, precision: 10, default: 0})
	public price: number;

	@Column({type: 'int'})
	public duration: number;

	@Column({type: 'varchar'})
	public genre: string;

	constructor(init?: Partial<IFood>) {
		super();
		Object.assign(this, init);
	}
}
