import type { Api } from './Api';
import type { AllApiOptions, Pagination, ResponsesMap, StructuresMap } from './types';

interface Response<T> {
    meta: {
        limit: number;
        offset: number;
        total: number;
    };
    data: T;
}

export class PendingRequest<
    TResource extends keyof ResponsesMap,
    TStructure extends StructuresMap[TResource] = StructuresMap[TResource],
> {
    // eslint-disable-next-line @typescript-eslint/max-params
    public constructor(
        protected readonly api: Api,
        public readonly resource: TResource,
        public readonly options: AllApiOptions,
        protected readonly transform: (data: ResponsesMap[TResource]['MRData']) => TStructure[],
    ) {
        //
    }

    public async get(pagination?: Pagination): Promise<Response<TStructure[]>> {
        const response = await this.api.get<ResponsesMap[TResource]>(
            this.getPath(`/${this.resource}`, this.options),
            pagination,
        );

        return {
            meta: {
                limit: Number(response.MRData.limit),
                offset: Number(response.MRData.offset),
                total: Number(response.MRData.total),
            },
            data: this.transform(response.MRData),
        };
    }

    public async getOne(pagination?: Pick<Pagination, 'offset'>): Promise<TStructure | null> {
        const { data } = await this.get({ limit: 1, ...pagination ?? {} });

        return data.length > 0 ? data[0] : null;
    }

    private getPath(basePath: string, options: AllApiOptions): string {
        const path: string[] = [];

        if (options.season) {
            path.push(String(options.season));

            if (options.round) {
                path.push(String(options.round));
            }
        }

        if (options.circuit) {
            path.push('circuits', options.circuit);
        }

        if (options.driver) {
            path.push('drivers', options.driver);
        }

        if (options.team) {
            path.push('constructors', options.team);
        }

        if (options.lap) {
            path.push('laps', String(options.lap));
        }

        if (options.pitStopNumber) {
            path.push('pitstops', String(options.pitStopNumber));
        }

        if (options.fastestRank) {
            path.push('fastest', String(options.fastestRank));
        }

        if (options.gridPosition) {
            path.push('grid', String(options.gridPosition));
        }

        if (options.finishPosition) {
            path.push('results', String(options.finishPosition));
        }

        if (options.status) {
            path.push('status', options.status);
        }

        if (options.driverStanding) {
            path.push('driverstandings', String(options.driverStanding));
        }

        if (options.qualifying) {
            path.push('qualifying', String(options.qualifying));
        }

        if (options.teamStanding) {
            path.push('constructorstandings', String(options.teamStanding));
        }

        if (path.length === 0) {
            return basePath;
        }

        return `/${path.join('/')}${basePath}`;
    }
}
