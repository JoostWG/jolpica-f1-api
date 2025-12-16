import type { FastestLapTimeApiData } from '../types';

export class FastestLapTime {
    public readonly time: string;

    public constructor(data: FastestLapTimeApiData) {
        this.time = data.time;
    }
}
