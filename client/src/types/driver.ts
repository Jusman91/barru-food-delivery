export interface IDriver {
	username: string;
	email: string;
	profilePic: string;
	age: number;
	city: string;
	subdistrict: string;
	address: string;
	phone: string;
	status: 1 | 0;
	driver_id: string;
}

export interface IDriverCardProps {
	data: {
		username: string;
		profilePic: string;
		phone: string;
		city: string;
		subdistrict: string;
		driver_id: string;
	};
}
