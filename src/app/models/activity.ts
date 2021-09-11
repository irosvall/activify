import { Member } from "./member";

export interface Activity {
  id: number,
	title: string;
	summary: string;
	description: string;
	extraInformation?: string;
	location: string;
	photos: string[],
	duration: number,
	minimumPeople?: number,
	maximumPeople?: number,
  host: Member,
}
