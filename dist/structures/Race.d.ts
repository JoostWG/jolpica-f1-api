import { Circuit } from './Circuit.js';
import { SessionDateTime } from './SessionDateTime.js';
import { RaceApiData } from '../types/api/race.d.js';
import './Location.js';
import '../types/api/circuit.d.js';
import '../types/api/common.d.js';

declare class Race {
    readonly season: number;
    readonly round: number;
    readonly wikiUrl: string | null;
    readonly name: string;
    readonly circuit: Circuit;
    readonly date: string;
    readonly time: string | null;
    readonly firstPractice: SessionDateTime | null;
    readonly secondPractice: SessionDateTime | null;
    readonly thirdPractice: SessionDateTime | null;
    readonly qualifying: SessionDateTime | null;
    readonly sprint: SessionDateTime | null;
    readonly sprintQualifying: SessionDateTime | null;
    readonly sprintShootout: SessionDateTime | null;
    constructor(data: RaceApiData);
}

export { Race };
