import { DateTimeApiData } from '../types/api/race.d.js';
import '../types/api/circuit.d.js';
import '../types/api/common.d.js';

declare class SessionDateTime {
    readonly date: string | null;
    readonly time: string | null;
    constructor(data: DateTimeApiData);
}

export { SessionDateTime };
