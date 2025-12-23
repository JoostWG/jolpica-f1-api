import type { SuccessResponse } from '.';
import type { CircuitApiData } from './circuit';

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface DateTimeApiData {
    date?: string;
    time?: string;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface RaceApiData {
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
export type RacesResponse = SuccessResponse<{
    RaceTable: {
        Races: RaceApiData[];
    };
}>;
