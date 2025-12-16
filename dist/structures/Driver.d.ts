import { DriverApiData } from '../types/api/driver.d.js';
import '../types/api/common.d.js';

declare class Driver {
    readonly id: string;
    readonly wikiUrl: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly dateOfBirth: Date;
    readonly nationality: string;
    readonly number: number | null;
    readonly code: string | null;
    constructor(data: DriverApiData);
}

export { Driver };
