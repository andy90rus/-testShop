import { BadRequestError, Body, Get, HttpCode, JsonController, Param, Post } from 'routing-controllers';
import { OrderEntity } from '../entities/order.entity';
import { OrderDto } from '../dtos/order.dto';
import { OrderService } from '../services/order.service';

@JsonController('/stores')
export class OrderController {
	constructor(private _orderService: OrderService){}

	@Get('/orders/')
	public async getAllOrders(): Promise<OrderEntity[]> {
		return await OrderEntity.find();
	}

	@Get('/orders/:id')
	public async getOrderById(@Param('id') id: number): Promise<OrderEntity> {
		const order = await OrderEntity.findOne(id);
		if (!order) {
			throw new BadRequestError('Order was not found.');
		}
		return order;
	}

	@Get('/:storeId/orders/:id')
	public async getOrderByIdAndStoreId(@Param('id') orderId: number, @Param('storeId') storeId: number) {
		const order = await OrderEntity.findOne(orderId, {where: {storeId}});
		if (!order) {
			throw new BadRequestError('Order was not found.');
		}
		return order;
	}

	@Get('/:storeId/orders/')
	public async getOrdersByStoreId(@Param('storeId') storeId: number) {
		return await OrderEntity.find({where: {storeId}});
	}

	@HttpCode(201)
	@Post('/orders')
	public async createOrder(@Body({validate: true}) order: OrderDto): Promise<OrderEntity> {
		return new OrderEntity(order).save();
	}
}
