export interface Activity {
	title: string;
	description: string;
	extraInformation?: string;
	location: string;
	photos: string[],
	duration: number,
	minimumPeople?: number,
	maximumPeople?: number,
}
