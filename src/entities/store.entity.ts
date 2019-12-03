import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IStore } from './interfaces/IStore.interface';
import { OrderEntity } from './order.entity';

@Entity({name: 'stores'})
export class StoreEntity extends BaseEntity implements IStore {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column({type: 'varchar', length: 100, name: 'name'})
	public name: string;

	@OneToMany(() => OrderEntity, (order) => order.store, {cascade: true})
	public orders: OrderEntity[];

	constructor(init?: Partial<IStore>) {
		super();
		Object.assign(this, init);
	}
}
