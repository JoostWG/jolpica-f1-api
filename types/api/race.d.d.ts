import { CircuitApiData } from './circuit.d.js';
import { SuccessResponse } from './common.d.js';

interface DateTimeApiData {
    date?: string;
    time?: string;
}

interface RaceApiData {
    season: string;
    round: string;
    url?: string;
    raceName: string;
    Circuit: CircuitApiData;
    date: string;
    time?: string;
    FirstPractice?: DateTimeApiData;
    SecondPractice?: DateTimeApiData;
    ThirdPractice?: DateTimeApiData;
    Qualifying?: DateTimeApiData;
    Sprint?: DateTimeApiData;
    SprintQualifying?: DateTimeApiData;
    SprintShootout?: DateTimeApiData;
}

type RacesResponse = SuccessResponse<{
    RaceTable: {
        Races: RaceApiData[];
    };
}>;

export type { DateTimeApiData, RaceApiData, RacesResponse };
