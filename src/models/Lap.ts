import type { Api } from '../Api';
import type { LapApiData, RaceApiData } from '../types';
import { Race } from './Race';
import { Timing } from './Timing';

/**
 * @category Models
 *
 * @since 2.0.0
 */
export class Lap {
    public readonly number: number;
    public readonly timings: readonly Timing[];
    public readonly race: Race;

    public constructor(data: LapApiData, raceData: RaceApiData, protected readonly api: Api) {
        this.number = Number(data.number);
        this.timings = data.Timings.map((timingData) => new Timing(timingData));
        this.race = new Race(raceData, this.api);
    }
}
