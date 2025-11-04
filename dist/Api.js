'use strict';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all) {
        __defProp(target, name, { get: all[name], enumerable: true });
    }
};
var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === 'object' || typeof from === 'function') {
        for (let key of __getOwnPropNames(from)) {
            if (!__hasOwnProp.call(to, key) && key !== except) {
                __defProp(to, key, {
                    get: () => from[key],
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
                });
            }
        }
    }
    return to;
};
var __toESM = (
    mod,
    isNodeMode,
    target,
) => (target = mod != null ? __create(__getProtoOf(mod)) : {},
    __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule
            ? __defProp(target, 'default', { value: mod, enumerable: true })
            : target,
        mod,
    ));
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);

// src/Api.ts
var Api_exports = {};
__export(Api_exports, {
    Api: () => Api,
});
module.exports = __toCommonJS(Api_exports);

// src/BaseApi.ts
var import_axios = __toESM(require('axios'));

// src/errors/HttpError.ts
var HttpError = class extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
};

// src/errors/BadRequest.ts
var BadRequest = class extends HttpError {
    constructor(detail) {
        super(400, detail);
        this.detail = detail;
    }
};

// src/errors/NotFound.ts
var NotFound = class extends HttpError {
    constructor(message) {
        super(404, message);
    }
};

// src/BaseApi.ts
var BaseApi = class {
    constructor(cache) {
        this.cache = cache;
        this.axios = import_axios.default.create({
            baseURL: 'https://api.jolpi.ca/ergast/f1',
            headers: new import_axios.AxiosHeaders().setContentType('application/json'),
        });
    }
    // Multiple
    async get(path, pagination) {
        if (this.cache) {
            const data2 = await this.cache.get(path, pagination);
            if (data2 !== null) {
                return data2;
            }
        }
        const response = await this.axios.get(`${path}.json`, {
            params: pagination,
        });
        if (response.status === 404) {
            throw new NotFound();
        }
        if (this.responseIsBadRequest(response)) {
            throw new BadRequest(response.data.detail);
        }
        if (response.status !== 200) {
            throw new HttpError(response.status);
        }
        const data = response.data;
        if (this.cache) {
            await this.cache.set(data, path, pagination);
        }
        return data;
    }
    responseIsBadRequest(response) {
        return response.status === 400;
    }
};

// src/creators.ts
var Data = class {
    createAverageSpeed(data) {
        return {
            units: data.units,
            speed: Number(data.speed),
        };
    }
    createCircuit(data) {
        return {
            id: data.circuitId,
            wikiUrl: data.url,
            name: data.circuitName,
            location: this.createLocation(data.Location),
        };
    }
    createDriverStanding(data) {
        return {
            position: data.position !== void 0 ? Number(data.position) : null,
            positionText: data.positionText,
            points: Number(data.points),
            wins: Number(data.wins),
            driver: this.createDriver(data.Driver),
            teams: data.Constructors.map(this.createTeam.bind(this)),
        };
    }
    createFastestLap(data) {
        return {
            rank: Number(data.rank),
            lap: Number(data.lap),
            time: this.createFastestLapTime(data.Time),
            averageSpeed: this.createAverageSpeed(data.AverageSpeed),
        };
    }
    createDriver(data) {
        return {
            id: data.driverId,
            wikiUrl: data.url,
            firstName: data.givenName,
            lastName: data.familyName,
            dateOfBirth: new Date(data.dateOfBirth),
            nationality: data.nationality,
            number: data.permanentNumber !== void 0 ? Number(data.permanentNumber) : null,
            code: data.code ?? null,
        };
    }
    createFastestLapTime(data) {
        return {
            time: data.time,
        };
    }
    createFinishingTime(data) {
        return {
            milliseconds: Number(data.millis),
            time: data.time,
        };
    }
    createLap(data) {
        return {
            number: Number(data.number),
            timings: data.Timings.map(this.createTiming.bind(this)),
        };
    }
    createTiming(data) {
        return {
            driverId: data.driverId,
            position: Number(data.position),
            time: data.time,
        };
    }
    createLocation(data) {
        return {
            latitude: Number(data.lat),
            longitude: Number(data.long),
            locality: data.locality,
            country: data.country,
        };
    }
    createPitStop(data) {
        return {
            driverId: data.driverId,
            lap: data.lap !== void 0 ? Number(data.lap) : null,
            stop: data.stop !== void 0 ? Number(data.stop) : null,
            time: data.time ?? null,
            duration: data.duration !== void 0 ? Number(data.duration) : null,
        };
    }
    createQualifyingResult(data) {
        return {
            number: Number(data.number),
            position: data.position !== void 0 ? Number(data.position) : null,
            driver: this.createDriver(data.Driver),
            team: this.createTeam(data.Constructor),
            q1: data.Q1 ?? null,
            q2: data.Q2 ?? null,
            q3: data.Q3 ?? null,
        };
    }
    createRace(data) {
        return {
            season: data.season,
            round: Number(data.round),
            wikiUrl: data.url ?? null,
            name: data.raceName,
            circuit: this.createCircuit(data.Circuit),
            date: data.date,
            time: data.time ?? null,
            firstPractice: data.FirstPractice !== void 0
                ? this.createSessionDateTime(data.FirstPractice)
                : null,
            secondPractice: data.SecondPractice !== void 0
                ? this.createSessionDateTime(data.SecondPractice)
                : null,
            thirdPractice: data.ThirdPractice !== void 0
                ? this.createSessionDateTime(data.ThirdPractice)
                : null,
            qualifying: data.Qualifying !== void 0
                ? this.createSessionDateTime(data.Qualifying)
                : null,
            sprint: data.Sprint !== void 0 ? this.createSessionDateTime(data.Sprint) : null,
            sprintQualifying: data.SprintQualifying !== void 0
                ? this.createSessionDateTime(data.SprintQualifying)
                : null,
            sprintShootout: data.SprintShootout !== void 0
                ? this.createSessionDateTime(data.SprintShootout)
                : null,
        };
    }
    createResult(data) {
        return {
            number: Number(data.number),
            position: data.position,
            positionText: data.positionText,
            points: Number(data.points),
            driver: this.createDriver(data.Driver),
            team: data.Constructor !== void 0 ? this.createTeam(data.Constructor) : null,
            grid: data.grid !== void 0 ? Number(data.grid) : null,
            laps: data.laps !== void 0 ? Number(data.laps) : null,
            status: data.status ?? null,
            fastestLap: this.createFastestLap(data.FastestLap),
            finishingTime: data.Time !== void 0 ? this.createFinishingTime(data.Time) : null,
        };
    }
    createSeason(data) {
        return {
            year: Number(data.season),
            wikiUrl: data.url,
        };
    }
    createSessionDateTime(data) {
        return {
            date: data.date ?? null,
            time: data.time ?? null,
        };
    }
    createSprintResult(data) {
        return {
            number: Number(data.number),
            position: data.position,
            positionText: data.positionText,
            points: Number(data.points),
            driver: this.createDriver(data.Driver),
            team: data.Constructor !== void 0 ? this.createTeam(data.Constructor) : null,
            grid: data.grid !== void 0 ? Number(data.grid) : null,
            laps: data.laps !== void 0 ? Number(data.laps) : null,
            status: data.status ?? null,
            finishingTime: data.Time !== void 0 ? this.createFinishingTime(data.Time) : null,
            fastestLap: data.FastestLap !== void 0 ? this.createFastestLap(data.FastestLap) : null,
        };
    }
    createStatus(data) {
        return {
            id: data.statusId,
            count: Number(data.count),
            name: data.status,
        };
    }
    createTeamStanding(data) {
        return {
            position: data.position ?? null,
            positionText: data.positionText,
            points: Number(data.points),
            wins: Number(data.wins),
            team: this.createTeam(data.Constructor),
        };
    }
    createTeam(data) {
        return {
            id: data.constructorId ?? null,
            wikiUrl: data.url ?? null,
            name: data.name,
            nationality: data.nationality ?? null,
        };
    }
};

// src/Api.ts
var Api = class extends BaseApi {
    constructor(cache) {
        super(cache);
        this.data = new Data();
    }
    async getCircuits(options, pagination) {
        return await this.getWithOptions(
            'circuits',
            (data) => data.CircuitTable.Circuits.map(this.data.createCircuit.bind(this.data)),
            options,
            pagination,
        );
    }
    async getDriverStandings(options, pagination) {
        return await this.getWithOptions(
            'driverstandings',
            (data) => {
                if (data.StandingsTable.StandingsLists.length <= 0) {
                    return [];
                }
                return data.StandingsTable.StandingsLists[0].DriverStandings.map(
                    this.data.createDriverStanding.bind(this.data),
                );
            },
            options,
            pagination,
        );
    }
    async getDrivers(options, pagination) {
        return await this.getWithOptions(
            'drivers',
            (data) => data.DriverTable.Drivers.map(this.data.createDriver.bind(this.data)),
            options,
            pagination,
        );
    }
    async getLaps(options, pagination) {
        return await this.getWithOptions(
            'laps',
            (data) => {
                if (data.RaceTable.Races.length <= 0) {
                    return [];
                }
                return data.RaceTable.Races[0].Laps.map(this.data.createLap.bind(this.data));
            },
            options,
            pagination,
        );
    }
    async getPitStops(options, pagination) {
        return await this.getWithOptions(
            'pitstops',
            (data) => {
                if (data.RaceTable.Races.length <= 0) {
                    return [];
                }
                return data.RaceTable.Races[0].PitStops.map(
                    this.data.createPitStop.bind(this.data),
                );
            },
            options,
            pagination,
        );
    }
    async getQualifyingResults(options, pagination) {
        return await this.getWithOptions(
            'qualifying',
            (data) => {
                if (data.RaceTable.Races.length <= 0) {
                    return [];
                }
                return data.RaceTable.Races[0].QualifyingResults.map(
                    this.data.createQualifyingResult.bind(this.data),
                );
            },
            options,
            pagination,
        );
    }
    async getRaces(options, pagination) {
        return await this.getWithOptions(
            'races',
            (data) => data.RaceTable.Races.map(this.data.createRace.bind(this.data)),
            options,
            pagination,
        );
    }
    async getResults(options, pagination) {
        return await this.getWithOptions(
            'results',
            (data) => {
                if (data.RaceTable.Races.length <= 0) {
                    return [];
                }
                return data.RaceTable.Races[0].Results.map(this.data.createResult.bind(this.data));
            },
            options,
            pagination,
        );
    }
    async getSeasons(options, pagination) {
        return await this.getWithOptions(
            'seasons',
            (data) => data.SeasonTable.Seasons.map(this.data.createSeason.bind(this.data)),
            options,
            pagination,
        );
    }
    async getSprintResults(options, pagination) {
        return await this.getWithOptions(
            'sprint',
            (data) => {
                if (data.RaceTable.Races.length <= 0) {
                    return [];
                }
                return data.RaceTable.Races[0].SprintResults.map(
                    this.data.createSprintResult.bind(this.data),
                );
            },
            options,
            pagination,
        );
    }
    async getTeamStandings(options, pagination) {
        return await this.getWithOptions(
            'constructorstandings',
            (data) => {
                if (data.StandingsTable.StandingsLists.length <= 0) {
                    return [];
                }
                return data.StandingsTable.StandingsLists[0].ConstructorStandings.map(
                    this.data.createTeamStanding.bind(this.data),
                );
            },
            options,
            pagination,
        );
    }
    async getTeams(options, pagination) {
        return await this.getWithOptions(
            'constructors',
            (data) => data.ConstructorTable.Constructors.map(this.data.createTeam.bind(this.data)),
            options,
            pagination,
        );
    }
    // eslint-disable-next-line @typescript-eslint/max-params
    async getWithOptions(path, transform, options, pagination) {
        const response = await this.get(
            this.getPath(`/${path}`, options ?? {}),
            pagination,
        );
        return {
            meta: {
                limit: Number(response.MRData.limit),
                offset: Number(response.MRData.offset),
                total: Number(response.MRData.total),
            },
            data: transform(response.MRData),
        };
    }
    getPath(basePath, options) {
        const path = [];
        if (options.season) {
            path.push(options.season);
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
        if (path.length === 0) {
            return basePath;
        }
        return `/${path.join('/')}${basePath}`;
    }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    Api,
});
