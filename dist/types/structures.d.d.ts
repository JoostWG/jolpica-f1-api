import { StatusType } from '../enums/StatusType.js';

interface AverageSpeed {
    units: string;
    speed: number;
}

interface Location {
    latitude: number;
    longitude: number;
    locality: string;
    country: string;
}

interface FastestLap {
    rank: number;
    lap: number;
    time: FastestLapTime;
    averageSpeed: AverageSpeed | null;
}

interface FastestLapTime {
    time: string;
}

interface FinishingTime {
    milliseconds: number;
    time: string;
}

interface Timing {
    driverId: string;
    position: number;
    time: string;
}

interface SessionDateTime {
    date: string | null;
    time: string | null;
}

interface Circuit {
    id: string;
    wikiUrl: string;
    name: string;
    location: Location;
}

interface Driver {
    id: string;
    wikiUrl: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    nationality: string;
    number: number | null;
    code: string | null;
}

interface DriverStanding {
    position: number | null;
    positionText: string;
    points: number;
    wins: number;
    driver: Driver;
    teams: Team[];
}

interface Lap {
    number: number;
    timings: Timing[];
}

interface PitStop {
    driverId: string;
    lap: number | null;
    stop: number | null;
    time: string | null;
    duration: number | null;
}

interface QualifyingResult {
    number: number;
    position: number | null;
    driver: Driver;
    team: Team;
    q1: string | null;
    q2: string | null;
    q3: string | null;
}

interface Race {
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

interface Result {
    number: number;
    position: string;
    positionText: string;
    points: number;
    driver: Driver;
    team: Team | null;
    grid: number | null;
    laps: number | null;
    status: string | null;
    fastestLap: FastestLap;
    finishingTime: FinishingTime | null;
}

interface Season {
    year: number;
    wikiUrl: string;
}

interface SprintResult {
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
}

interface Status {
    id: StatusType;
    count: number;
    name: string;
}

interface Team {
    id: string | null;
    wikiUrl: string | null;
    name: string;
    nationality: string | null;
}

interface TeamStanding {
    position: string | null;
    positionText: string;
    points: number;
    wins: number;
    team: Team;
}

export type { AverageSpeed, Circuit, Driver, DriverStanding, FastestLap, FastestLapTime, FinishingTime, Lap, Location, PitStop, QualifyingResult, Race, Result, Season, SessionDateTime, SprintResult, Status, Team, TeamStanding, Timing };
