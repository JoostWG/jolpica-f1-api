import type { TimingApiData } from '../types';

export class Timing {
    public readonly driverId: string;
    public readonly position: number;
    public readonly time: string;

    public constructor(data: TimingApiData) {
        this.driverId = data.driverId;
        this.position = Number(data.position);
        this.time = data.time;
    }
}
