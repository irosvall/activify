enum PriceType {
	PerHour,
	PerPerson,
	FixedPrice,
}

export interface ActivityPrice {
	price: number;
	priceType: PriceType;
}
