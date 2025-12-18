import type { Api } from '../Api';
import type { PitStopApiData, RaceApiData } from '../types';
import { Race } from './Race';

export class PitStop {
    public readonly driverId: string;
    public readonly lap: number | null;
    public readonly stop: number | null;
    public readonly time: string | null;
    public readonly duration: number | null;
    public readonly race: Race;

    public constructor(data: PitStopApiData, raceData: RaceApiData, protected readonly api: Api) {
        this.driverId = data.driverId;
        this.lap = data.lap !== undefined ? Number(data.lap) : null;
        this.stop = data.stop !== undefined ? Number(data.stop) : null;
        this.time = data.time ?? null;
        this.duration = data.duration !== undefined ? Number(data.duration) : null;
        this.race = new Race(raceData, this.api);
    }
}
