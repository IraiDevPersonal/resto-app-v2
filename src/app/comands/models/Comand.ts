export type ComandItem = {
	productoDiscount?: number;
	productPrice: number;
	productName: string;
	productId: number;
};

export type ComandCardProps = {
	orderNumber: number;
	tableNumber: number;
	items: ComandItem[];
	status: string;
	orders: number;
};
