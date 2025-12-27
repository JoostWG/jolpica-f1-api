import type { Api } from '../Api';
import type { LocationApiData } from '../types';
import { Model } from './Model';

/**
 * @category Models
 *
 * @since 2.0.0
 */
export class Location extends Model {
    public readonly latitude: number;
    public readonly longitude: number;
    public readonly locality: string;
    public readonly country: string;

    public constructor(data: LocationApiData, api: Api) {
        super(api);

        this.latitude = Number(data.lat);
        this.longitude = Number(data.long);
        this.locality = data.locality;
        this.country = data.country;
    }
}
