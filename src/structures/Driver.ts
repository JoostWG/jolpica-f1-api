import type { Api } from '../Api';
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

    public constructor(data: DriverApiData, protected readonly api: Api) {
        this.id = data.driverId;
        this.wikiUrl = data.url;
        this.firstName = data.givenName;
        this.lastName = data.familyName;
        this.dateOfBirth = new Date(data.dateOfBirth);
        this.nationality = data.nationality;
        this.number = data.permanentNumber !== undefined ? Number(data.permanentNumber) : null;
        this.code = data.code ?? null;
    }

    public get name(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public get age(): number {
        return this.ageAt(new Date());
    }

    public ageAt(date: Date): number {
        const age = date.getFullYear() - this.dateOfBirth.getFullYear();

        if (this.dateOfBirth.getMonth() > date.getMonth()) {
            return age - 1;
        }

        if (this.dateOfBirth.getDate() > date.getDate()) {
            return age - 1;
        }

        return age;
    }
}
