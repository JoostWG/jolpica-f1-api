import { Circuit } from '../structures/Circuit.js';
import { Driver } from '../structures/Driver.js';
import { DriverStanding } from '../structures/DriverStanding.js';
import { Lap } from '../structures/Lap.js';
import { PitStop } from '../structures/PitStop.js';
import { QualifyingResult } from '../structures/QualifyingResult.js';
import { Race } from '../structures/Race.js';
import { Result } from '../structures/Result.js';
import { Season } from '../structures/Season.js';
import { SprintResult } from '../structures/SprintResult.js';
import { Status } from '../structures/Status.js';
import { Team } from '../structures/Team.js';
import { TeamStanding } from '../structures/TeamStanding.js';
import { CircuitsResponse } from './api/circuit.d.js';
export { CircuitApiData, LocationApiData } from './api/circuit.d.js';
export { AverageSpeedApiData, BadRequestResponse, FastestLapApiData, FastestLapTimeApiData, FinishingTimeApiData, MRData, Pagination, SuccessResponse } from './api/common.d.js';
import { ConstructorsResponse } from './api/constructor.d.js';
export { ConstructorApiData } from './api/constructor.d.js';
import { ConstructorStandingsResponse } from './api/constructor-standing.d.js';
export { ConstructorStandingApiData } from './api/constructor-standing.d.js';
import { DriversResponse } from './api/driver.d.js';
export { DriverApiData } from './api/driver.d.js';
import { DriverStandingsResponse } from './api/driver-standing.d.js';
export { DriverStandingApiData } from './api/driver-standing.d.js';
import { LapsResponse } from './api/lap.d.js';
export { LapApiData, TimingApiData } from './api/lap.d.js';
import { PitStopsResponse } from './api/pit-stop.d.js';
export { PitStopApiData } from './api/pit-stop.d.js';
import { QualifyingResultsResponse } from './api/qualifying-result.d.js';
export { QualifyingResultApiData } from './api/qualifying-result.d.js';
import { RacesResponse } from './api/race.d.js';
export { DateTimeApiData, RaceApiData } from './api/race.d.js';
import { ResultsResponse } from './api/result.d.js';
export { ResultApiData } from './api/result.d.js';
import { SeasonsResponse } from './api/season.d.js';
export { SeasonApiData } from './api/season.d.js';
import { SprintResultsResponse } from './api/sprint-result.d.js';
export { SprintResultApiData } from './api/sprint-result.d.js';
import { StatusesResponse } from './api/status.d.js';
export { StatusApiData } from './api/status.d.js';
import { SeasonOption, RoundOption, CircuitOption, DriverOption, TeamOption, LapOption, PitStopOption, FastestRankOption, GridPositionOption, FinishPositionOption, StatusOption } from './options.d.js';
export { ApiCache } from './ApiCache.d.js';
import '../structures/Location.js';
import '../structures/Timing.js';
import '../structures/SessionDateTime.js';
import '../structures/FastestLap.js';
import '../structures/AverageSpeed.js';
import '../structures/FastestLapTime.js';
import '../structures/FinishingTime.js';
import '../enums/StatusType.js';
import 'axios';

interface ResponsesMap {
    circuits: CircuitsResponse;
    constructorstandings: ConstructorStandingsResponse;
    constructors: ConstructorsResponse;
    driverstandings: DriverStandingsResponse;
    drivers: DriversResponse;
    laps: LapsResponse;
    pitstops: PitStopsResponse;
    qualifying: QualifyingResultsResponse;
    races: RacesResponse;
    results: ResultsResponse;
    seasons: SeasonsResponse;
    sprint: SprintResultsResponse;
    status: StatusesResponse;
}

interface StructuresMap {
    circuits: Circuit;
    constructorstandings: TeamStanding;
    constructors: Team;
    driverstandings: DriverStanding;
    drivers: Driver;
    laps: Lap;
    pitstops: PitStop;
    qualifying: QualifyingResult;
    races: Race;
    results: Result;
    seasons: Season;
    sprint: SprintResult;
    status: Status;
}

type SimpleApiOptions =
    & SeasonOption
    & RoundOption
    & CircuitOption
    & DriverOption
    & TeamOption
    & LapOption
    & PitStopOption
    & FastestRankOption
    & GridPositionOption
    & FinishPositionOption
    & StatusOption;

export { CircuitOption, CircuitsResponse, ConstructorStandingsResponse, ConstructorsResponse, DriverOption, DriverStandingsResponse, DriversResponse, FastestRankOption, FinishPositionOption, GridPositionOption, LapOption, LapsResponse, PitStopOption, PitStopsResponse, QualifyingResultsResponse, RacesResponse, type ResponsesMap, ResultsResponse, RoundOption, SeasonOption, SeasonsResponse, type SimpleApiOptions, SprintResultsResponse, StatusOption, StatusesResponse, type StructuresMap, TeamOption };
