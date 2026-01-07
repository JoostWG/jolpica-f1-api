import { ValidatorFunc, ObjectValidatorFunc, ObjectShape } from 'valicheck';
import { CircuitsResponse, ConstructorsResponse, ConstructorStandingsResponse, DriversResponse, DriverStandingsResponse, LapsResponse, PitStopsResponse, QualifyingResultsResponse, RacesResponse, ResultsResponse, SeasonsResponse, SprintResultsResponse, StatusesResponse, SuccessResponse } from '../types/api/index.d.js';
import { AverageSpeedApiData, CircuitApiData, ConstructorApiData, ConstructorStandingApiData, DateTimeApiData, DriverApiData, DriverStandingApiData, FastestLapApiData, FastestLapTimeApiData, FinishingTimeApiData, LapApiData, LocationApiData, PitStopApiData, QualifyingResultApiData, RaceApiData, ResultApiData, SeasonApiData, SprintResultApiData, StatusApiData, TimingApiData } from '../types/api/data.d.js';
import '../enums/StatusType.js';

declare class Validate {
    circuitsResponse(): ValidatorFunc<CircuitsResponse>;
    teamsResponse(): ValidatorFunc<ConstructorsResponse>;
    teamStandingsResponse(): ValidatorFunc<ConstructorStandingsResponse>;
    driversResponse(): ValidatorFunc<DriversResponse>;
    driverStandingsResponse(): ValidatorFunc<DriverStandingsResponse>;
    lapsResponse(): ValidatorFunc<LapsResponse>;
    pitStopsResponse(): ValidatorFunc<PitStopsResponse>;
    qualifyingResultsResponse(): ValidatorFunc<QualifyingResultsResponse>;
    racesResponse(): ValidatorFunc<RacesResponse>;
    resultsResponse(): ValidatorFunc<ResultsResponse>;
    seasonsResponse(): ValidatorFunc<SeasonsResponse>;
    sprintResultsResponse(): ValidatorFunc<SprintResultsResponse>;
    statusesResponse(): ValidatorFunc<StatusesResponse>;
    protected averageSpeed(): ValidatorFunc<AverageSpeedApiData>;
    protected circuit(): ValidatorFunc<CircuitApiData>;
    protected team(): ValidatorFunc<ConstructorApiData>;
    protected teamStanding(): ValidatorFunc<ConstructorStandingApiData>;
    protected dateTime(): ValidatorFunc<DateTimeApiData>;
    protected driver(): ValidatorFunc<DriverApiData>;
    protected driverStanding(): ValidatorFunc<DriverStandingApiData>;
    protected fastestLap(): ValidatorFunc<FastestLapApiData>;
    protected fastestLapTime(): ValidatorFunc<FastestLapTimeApiData>;
    protected finishingTime(): ValidatorFunc<FinishingTimeApiData>;
    protected lap(): ValidatorFunc<LapApiData>;
    protected location(): ValidatorFunc<LocationApiData>;
    protected pitStop(): ValidatorFunc<PitStopApiData>;
    protected qualifyingResult(): ValidatorFunc<QualifyingResultApiData>;
    protected race(): ObjectValidatorFunc<RaceApiData>;
    protected result(): ValidatorFunc<ResultApiData>;
    protected season(): ValidatorFunc<SeasonApiData>;
    protected sprintResult(): ValidatorFunc<SprintResultApiData>;
    protected status(): ValidatorFunc<StatusApiData>;
    protected timing(): ValidatorFunc<TimingApiData>;
    protected apiResponse<T extends Record<string, unknown>>(dataShape: ObjectShape<T>): ValidatorFunc<SuccessResponse<T>>;
    protected year(): ValidatorFunc<`${number}`>;
    protected integer(): ValidatorFunc<`${number}`>;
    protected decimal(): ValidatorFunc<`${number}`>;
    protected date(): ValidatorFunc<string>;
}

export { Validate };
