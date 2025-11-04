import { SuccessResponse, Pagination } from './types/api/common.d.js';
import { ApiCache } from './types/ApiCache.d.js';

/**
 * Minimal API implementation. Please use `Api` instead
 *
 * ```ts
 * const api = new BaseApi();
 *
 * const racesResponse = await api.get<RacesResponse>('/drivers/hamilton/races', { limit: 10 });
 *
 * const races = racesResponse.MRData.RaceTable.Races;
 *
 * for (const race of races) {
 *     console.log(`${race.season} ${race.raceName}`);
 * }
 * ```
 */
declare class BaseApi {
    private readonly cache?;
    private readonly axios;
    constructor(cache?: ApiCache | undefined);
    get<T extends SuccessResponse>(path: string, pagination?: Pagination): Promise<T>;
    private responseIsBadRequest;
}

export { BaseApi };
