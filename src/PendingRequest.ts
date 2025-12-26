import type { Api } from './Api';
import type {
    AnyApiOptions,
    AnyModel,
    ModelsKey,
    ModelsMap,
    Pagination,
    Response,
    ResponsesMap,
} from './types';

/**
 * @category Base
 *
 * @since 2.0.0
 */
export class PendingRequest<
    TData extends AnyModel[],
    TResource extends ModelsKey<TData[number]> = ModelsKey<TData[number]>,
    TModel extends ModelsMap[TResource] = ModelsMap[TResource],
> {
    public constructor(
        protected readonly api: Api,
        public readonly resource: TResource,
        public readonly options: AnyApiOptions,
        protected readonly transform: (data: ResponsesMap[TResource]['MRData']) => TModel[],
    ) {
        //
    }

    public get url(): string {
        return this.api.baseUrl + this.getPath();
    }

    public async get(pagination?: Pagination): Promise<Response<TModel[]>> {
        const response = await this.api.get<ResponsesMap[TResource]>(this.getPath(), pagination);

        return {
            meta: {
                limit: Number(response.MRData.limit),
                offset: Number(response.MRData.offset),
                total: Number(response.MRData.total),
            },
            data: this.transform(response.MRData),
        };
    }

    public async getOne(pagination?: Omit<Pagination, 'limit'>): Promise<TModel | null> {
        const { data } = await this.get({ limit: 1, ...pagination ?? {} });

        return data.length > 0 ? data[0] : null;
    }

    protected getPath(): string {
        const basePath = `/${this.resource}`;

        const path: string[] = [];

        if (this.options.season) {
            path.push(String(this.options.season));

            if (this.options.round) {
                path.push(String(this.options.round));
            }
        }

        if (this.options.circuit) {
            path.push('circuits', this.options.circuit);
        }

        if (this.options.driver) {
            path.push('drivers', this.options.driver);
        }

        if (this.options.team) {
            path.push('constructors', this.options.team);
        }

        if (this.options.lap) {
            path.push('laps', String(this.options.lap));
        }

        if (this.options.pitStopNumber) {
            path.push('pitstops', String(this.options.pitStopNumber));
        }

        if (this.options.fastestRank) {
            path.push('fastest', String(this.options.fastestRank));
        }

        if (this.options.gridPosition) {
            path.push('grid', String(this.options.gridPosition));
        }

        if (this.options.finishPosition) {
            path.push('results', String(this.options.finishPosition));
        }

        if (this.options.status) {
            path.push('status', this.options.status);
        }

        if (this.options.driverStanding) {
            path.push('driverstandings', String(this.options.driverStanding));
        }

        if (this.options.qualifying) {
            path.push('qualifying', String(this.options.qualifying));
        }

        if (this.options.teamStanding) {
            path.push('constructorstandings', String(this.options.teamStanding));
        }

        if (path.length === 0) {
            return basePath;
        }

        return `/${path.join('/')}${basePath}`;
    }
}
