import type { DriverApiData } from '../types';

export class Driver {
    public readonly id: string;
    public readonly wikiUrl: string;
    public readonly firstName: string;
    public readonly lastName: string;
    public readonly dateOfBirth: Date;
    public readonly nationality: string;
    public readonly number: number | null;
    public readonly code: string | null;

    public constructor(data: DriverApiData) {
        this.id = data.driverId;
        this.wikiUrl = data.url;
        this.firstName = data.givenName;
        this.lastName = data.familyName;
        this.dateOfBirth = new Date(data.dateOfBirth);
        this.nationality = data.nationality;
        this.number = data.permanentNumber !== undefined ? Number(data.permanentNumber) : null;
        this.code = data.code ?? null;
    }
}
