import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IFood } from './interfaces/IFood.interface';
import { FoodType } from './enums/foodType.enum';

@Entity({name: 'foods'})
export class FoodEntity extends BaseEntity implements IFood {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column({type: 'varchar'})
	public description: string;

	@Column({type: 'enum', enum: FoodType, nullable: true})
	public foodType: FoodType;

	@Column({type: 'varchar'})
	public name: string;

	@Column({type: 'decimal', scale: 2, precision: 10, default: 0})
	public price: number;

	constructor(init?: Partial<IFood>) {
		super();
		Object.assign(this, init);
	}
}
