import type { StatusType } from '../enums';

export interface AverageSpeed {
    units: string;
    speed: number;
}

export interface Location {
    latitude: number;
    longitude: number;
    locality: string;
    country: string;
}

export interface FastestLap {
    rank: number;
    lap: number;
    time: FastestLapTime;
    averageSpeed: AverageSpeed | null;
}

export interface FastestLapTime {
    time: string;
}

export interface FinishingTime {
    milliseconds: number;
    time: string;
}

export interface Timing {
    driverId: string;
    position: number;
    time: string;
}

export interface SessionDateTime {
    date: string | null;
    time: string | null;
}

export interface Circuit {
    id: string;
    wikiUrl: string;
    name: string;
    location: Location;
}

export interface Driver {
    id: string;
    wikiUrl: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    nationality: string;
    number: number | null;
    code: string | null;
}

export interface DriverStanding {
    season: string;
    round: number;
    position: number | null;
    positionText: string;
    points: number;
    wins: number;
    driver: Driver;
    teams: Team[];
}

export interface Lap {
    number: number;
    timings: Timing[];
    race: Race;
}

export interface PitStop {
    driverId: string;
    lap: number | null;
    stop: number | null;
    time: string | null;
    duration: number | null;
    race: Race;
}

export interface QualifyingResult {
    number: number;
    position: number | null;
    driver: Driver;
    team: Team;
    q1: string | null;
    q2: string | null;
    q3: string | null;
    race: Race;
}

export interface Race {
    season: string;
    round: number;
    wikiUrl: string | null;
    name: string;
    circuit: Circuit;
    date: string;
    time: string | null;
    firstPractice: SessionDateTime | null;
    secondPractice: SessionDateTime | null;
    thirdPractice: SessionDateTime | null;
    qualifying: SessionDateTime | null;
    sprint: SessionDateTime | null;
    sprintQualifying: SessionDateTime | null;
    sprintShootout: SessionDateTime | null;
}

export interface Result {
    number: number;
    position: string;
    positionText: string;
    points: number;
    driver: Driver;
    team: Team | null;
    grid: number | null;
    laps: number | null;
    status: string | null;
    fastestLap: FastestLap | null;
    finishingTime: FinishingTime | null;
    race: Race;
}

export interface Season {
    year: number;
    wikiUrl: string;
}

export interface SprintResult {
    number: number;
    position: string;
    positionText: string;
    points: number;
    driver: Driver;
    team: Team | null;
    grid: number | null;
    laps: number | null;
    status: string | null;
    finishingTime: FinishingTime | null;
    fastestLap: FastestLap | null;
    race: Race;
}

export interface Status {
    id: StatusType;
    count: number;
    name: string;
}

export interface Team {
    id: string | null;
    wikiUrl: string | null;
    name: string;
    nationality: string | null;
}

export interface TeamStanding {
    season: string;
    round: number;
    position: string | null;
    positionText: string;
    points: number;
    wins: number;
    team: Team;
}
