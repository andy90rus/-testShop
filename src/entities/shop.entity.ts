import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IFood } from './interfaces/IFood.interface';
import { FoodType } from './enums/foodType.enum';
import { IShop } from './interfaces/IShop.interface';

@Entity({name: 'shops'})
export class ShopEntity extends BaseEntity implements IShop {
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

	@Column({type: 'varchar'})
	public brand: string;

	constructor(init?: Partial<IFood>) {
		super();
		Object.assign(this, init);
	}
}
