import { BaseApi } from './BaseApi.js';
import { SeasonOption, RoundOption, DriverOption, FastestRankOption, GridPositionOption, FinishPositionOption, StatusOption, TeamOption, CircuitOption, LapOption, PitStopOption } from './types/options.d.js';
import { ResponsesMap, StructuresMap, SimpleApiOptions } from './types/index.d.js';
import { Pagination } from './types/api/common.d.js';

interface Response<T> {
    meta: {
        limit: number;
        offset: number;
        total: number;
    };
    data: T;
}
declare class PendingRequest<TResource extends keyof ResponsesMap, TStructure extends StructuresMap[TResource] = StructuresMap[TResource]> {
    protected readonly api: Api;
    readonly resource: TResource;
    readonly options: SimpleApiOptions;
    protected readonly transform: (data: ResponsesMap[TResource]['MRData']) => TStructure[];
    constructor(api: Api, resource: TResource, options: SimpleApiOptions, transform: (data: ResponsesMap[TResource]['MRData']) => TStructure[]);
    get(pagination?: Pagination): Promise<Response<TStructure[]>>;
    getOne(pagination?: Pick<Pagination, 'offset'>): Promise<TStructure | null>;
    private getPath;
}

declare class Api extends BaseApi {
    circuits(options?: SeasonOption & RoundOption & DriverOption & FastestRankOption & GridPositionOption & FinishPositionOption & StatusOption & TeamOption): PendingRequest<'circuits'>;
    driverStandings(options: Required<SeasonOption> & RoundOption & DriverOption): PendingRequest<'driverstandings'>;
    drivers(options?: SeasonOption & RoundOption & CircuitOption & FastestRankOption & GridPositionOption & FinishPositionOption & StatusOption & TeamOption): PendingRequest<'drivers'>;
    laps(options: Required<SeasonOption> & Required<RoundOption> & DriverOption & LapOption & TeamOption): PendingRequest<'laps'>;
    pitStops(options: Required<SeasonOption> & Required<RoundOption> & DriverOption & LapOption & PitStopOption): PendingRequest<'pitstops'>;
    qualifyingResults(options?: SeasonOption & RoundOption & CircuitOption & DriverOption & GridPositionOption & FastestRankOption & StatusOption & TeamOption): PendingRequest<'qualifying'>;
    races(options?: SeasonOption & RoundOption & CircuitOption & DriverOption & FinishPositionOption & GridPositionOption & StatusOption & TeamOption): PendingRequest<'races'>;
    results(options?: SeasonOption & RoundOption & CircuitOption & DriverOption & FastestRankOption & GridPositionOption & StatusOption & TeamOption): PendingRequest<'results'>;
    seasons(options?: CircuitOption & DriverOption & GridPositionOption & StatusOption & TeamOption): PendingRequest<'seasons'>;
    sprintResults(options?: CircuitOption & DriverOption & GridPositionOption & StatusOption & TeamOption): PendingRequest<'sprint'>;
    teamStandings(options: Required<SeasonOption> & RoundOption & TeamOption): PendingRequest<'constructorstandings'>;
    teams(options?: SeasonOption & RoundOption & CircuitOption & FastestRankOption & GridPositionOption & FinishPositionOption & StatusOption): PendingRequest<'constructors'>;
    private makePendingRequest;
}

export { Api as A, PendingRequest as P };
