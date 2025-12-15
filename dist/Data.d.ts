import { CircuitApiData, LocationApiData } from './types/api/circuit.d.js';
import { AverageSpeedApiData, FastestLapApiData, FastestLapTimeApiData, FinishingTimeApiData } from './types/api/common.d.js';
import { ConstructorApiData } from './types/api/constructor.d.js';
import { ConstructorStandingApiData } from './types/api/constructor-standing.d.js';
import { DriverApiData } from './types/api/driver.d.js';
import { DriverStandingApiData } from './types/api/driver-standing.d.js';
import { LapApiData, TimingApiData } from './types/api/lap.d.js';
import { PitStopApiData } from './types/api/pit-stop.d.js';
import { QualifyingResultApiData } from './types/api/qualifying-result.d.js';
import { RaceApiData, DateTimeApiData } from './types/api/race.d.js';
import { ResultApiData } from './types/api/result.d.js';
import { SeasonApiData } from './types/api/season.d.js';
import { SprintResultApiData } from './types/api/sprint-result.d.js';
import { StatusApiData } from './types/api/status.d.js';
import { AverageSpeed, Circuit, DriverStanding, FastestLap, Driver, FastestLapTime, FinishingTime, Lap, Timing, Location, PitStop, QualifyingResult, Race, Result, Season, SessionDateTime, SprintResult, Status, TeamStanding, Team } from './types/structures.d.js';
import './enums/StatusType.js';

declare class Data {
    createAverageSpeed(data: AverageSpeedApiData): AverageSpeed;
    createCircuit(data: CircuitApiData): Circuit;
    createDriverStanding(data: DriverStandingApiData, season: string, round: string): DriverStanding;
    createFastestLap(data: FastestLapApiData): FastestLap;
    createDriver(data: DriverApiData): Driver;
    createFastestLapTime(data: FastestLapTimeApiData): FastestLapTime;
    createFinishingTime(data: FinishingTimeApiData): FinishingTime;
    createLap(data: LapApiData, raceData: RaceApiData): Lap;
    createTiming(data: TimingApiData): Timing;
    createLocation(data: LocationApiData): Location;
    createPitStop(data: PitStopApiData, raceData: RaceApiData): PitStop;
    createQualifyingResult(data: QualifyingResultApiData, raceData: RaceApiData): QualifyingResult;
    createRace(data: RaceApiData): Race;
    createResult(data: ResultApiData, raceData: RaceApiData): Result;
    createSeason(data: SeasonApiData): Season;
    createSessionDateTime(data: DateTimeApiData): SessionDateTime;
    createSprintResult(data: SprintResultApiData, raceData: RaceApiData): SprintResult;
    createStatus(data: StatusApiData): Status;
    createTeamStanding(data: ConstructorStandingApiData, season: string, round: string): TeamStanding;
    createTeam(data: ConstructorApiData): Team;
}

export { Data };
