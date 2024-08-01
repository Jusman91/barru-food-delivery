export function formatPrice(price: number) {
	switch (true) {
		case price >= 1000000:
			return `${(price / 1000000).toFixed(1)}M`;
		case price >= 1000:
			return `${(price / 1000).toFixed(0)}k`;
		default:
			return price.toString();
	}
}
