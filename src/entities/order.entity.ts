import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { IStore } from './interfaces/IStore.interface';
import { IOrder } from './interfaces/IOrder.interface';
import { StoreEntity } from './store.entity';
import { IStoreDto } from '../dtos/interfaces/IStoreDto.interface';
import { OrderType } from './enums/orderType.enum';

@Entity({name: 'orders'})
export class OrderEntity extends BaseEntity implements IOrder {
	@PrimaryGeneratedColumn()
	public id: number;
	@Column('timestamp', {precision: 3, default: () => 'CURRENT_TIMESTAMP(3)'})
	public created: Date;
	@Column('decimal', {scale: 2, precision: 10, default: 0.0})
    public baseAmount: number;
	@Column({type: 'enum', enum: OrderType, nullable: true})
	public orderType: OrderType;
	@Column('decimal', {scale: 2, precision: 10, default: 0.0})
    public totalAmount: number;
	@RelationId((store: OrderEntity) => store.store)
	public storeId: number;
	@ManyToOne(() => StoreEntity, (store) => store.orders, {nullable: false})
    public store: StoreEntity;

	constructor(init?: Partial<IStore | IStoreDto>) {
		super();
		Object.assign(this, init);
	}
}
