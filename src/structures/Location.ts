import type { LocationApiData } from '../types';

export class Location {
    public readonly latitude: number;
    public readonly longitude: number;
    public readonly locality: string;
    public readonly country: string;

    public constructor(data: LocationApiData) {
        this.latitude = Number(data.lat);
        this.longitude = Number(data.long);
        this.locality = data.locality;
        this.country = data.country;
    }
}
