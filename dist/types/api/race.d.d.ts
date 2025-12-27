import { CircuitApiData } from './circuit.d.js';
import { SuccessResponse } from './common.d.js';

/**
 * @category Api data
 *
 * @since 1.0.1
 */
interface DateTimeApiData {
    date?: string;
    time?: string;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
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

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
type RacesResponse = SuccessResponse<{
    RaceTable: {
        Races: RaceApiData[];
    };
}>;

export type { DateTimeApiData, RaceApiData, RacesResponse };
