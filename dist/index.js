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

// src/index.ts
var index_exports = {};
__export(index_exports, {
    Api: () => Api,
    BaseApi: () => BaseApi,
    StatusType: () => StatusType,
});
module.exports = __toCommonJS(index_exports);

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

// src/enums/StatusType.ts
var StatusType = /* @__PURE__ */ ((StatusType2) => {
    StatusType2['Finished'] = '1';
    StatusType2['Plus1Lap'] = '11';
    StatusType2['Engine'] = '5';
    StatusType2['Plus2Laps'] = '12';
    StatusType2['Accident'] = '3';
    StatusType2['Collision'] = '4';
    StatusType2['Gearbox'] = '6';
    StatusType2['SpunOff'] = '20';
    StatusType2['Plus3Laps'] = '13';
    StatusType2['Suspension'] = '22';
    StatusType2['Plus4Laps'] = '14';
    StatusType2['Transmission'] = '7';
    StatusType2['Electrical'] = '10';
    StatusType2['Lapped'] = '143';
    StatusType2['Brakes'] = '23';
    StatusType2['Withdrew'] = '54';
    StatusType2['Retired'] = '31';
    StatusType2['Plus5Laps'] = '15';
    StatusType2['Clutch'] = '8';
    StatusType2['NotClassified'] = '62';
    StatusType2['FuelSystem'] = '69';
    StatusType2['Plus6Laps'] = '16';
    StatusType2['Disqualified'] = '2';
    StatusType2['Turbo'] = '101';
    StatusType2['Hydraulics'] = '9';
    StatusType2['Overheating'] = '25';
    StatusType2['Ignition'] = '80';
    StatusType2['OilLeak'] = '44';
    StatusType2['Throttle'] = '37';
    StatusType2['OutOfFuel'] = '60';
    StatusType2['Plus7Laps'] = '17';
    StatusType2['Halfshaft'] = '86';
    StatusType2['Wheel'] = '36';
    StatusType2['OilPressure'] = '51';
    StatusType2['FuelPump'] = '48';
    StatusType2['Differential'] = '24';
    StatusType2['Tyre'] = '27';
    StatusType2['Handling'] = '64';
    StatusType2['Plus8Laps'] = '18';
    StatusType2['FuelLeak'] = '95';
    StatusType2['CollisionDamage'] = '130';
    StatusType2['Steering'] = '38';
    StatusType2['Radiator'] = '21';
    StatusType2['PowerUnit'] = '131';
    StatusType2['Puncture'] = '29';
    StatusType2['Plus9Laps'] = '19';
    StatusType2['WheelBearing'] = '67';
    StatusType2['Injection'] = '98';
    StatusType2['FuelPressure'] = '32';
    StatusType2['Plus10Laps'] = '88';
    StatusType2['WaterLeak'] = '47';
    StatusType2['Alternator'] = '91';
    StatusType2['Physical'] = '68';
    StatusType2['Exhaust'] = '43';
    StatusType2['Chassis'] = '83';
    StatusType2['Mechanical'] = '26';
    StatusType2['Magneto'] = '121';
    StatusType2['Driveshaft'] = '30';
    StatusType2['Axle'] = '109';
    StatusType2['HeatShieldFire'] = '42';
    StatusType2['Plus11Laps'] = '45';
    StatusType2['Battery'] = '84';
    StatusType2['Distributor'] = '99';
    StatusType2['OilPump'] = '94';
    StatusType2['PowerLoss'] = '75';
    StatusType2['Plus13Laps'] = '53';
    StatusType2['Injury'] = '82';
    StatusType2['Plus12Laps'] = '55';
    StatusType2['Plus14Laps'] = '111';
    StatusType2['OilPipe'] = '108';
    StatusType2['BrokenWing'] = '41';
    StatusType2['Electronics'] = '40';
    StatusType2['DriverUnwell'] = '100';
    StatusType2['Vibrations'] = '76';
    StatusType2['Plus15Laps'] = '112';
    StatusType2['DidNotStart'] = '142';
    StatusType2['RearWing'] = '65';
    StatusType2['WheelNut'] = '61';
    StatusType2['Excluded'] = '96';
    StatusType2['WaterPressure'] = '34';
    StatusType2['Plus16Laps'] = '116';
    StatusType2['Plus17Laps'] = '50';
    StatusType2['Injured'] = '73';
    StatusType2['WaterPump'] = '103';
    StatusType2['ERS'] = '132';
    StatusType2['FrontWing'] = '33';
    StatusType2['Supercharger'] = '126';
    StatusType2['Plus18Laps'] = '114';
    StatusType2['Plus19Laps'] = '124';
    StatusType2['Plus22Laps'] = '115';
    StatusType2['Plus24Laps'] = '117';
    StatusType2['Fuel'] = '74';
    StatusType2['Pneumatics'] = '63';
    StatusType2['Technical'] = '39';
    StatusType2['Plus25Laps'] = '113';
    StatusType2['FatalAccident'] = '104';
    StatusType2['Fire'] = '66';
    StatusType2['FuelPipe'] = '106';
    StatusType2['SparkPlugs'] = '105';
    StatusType2['Undertray'] = '140';
    StatusType2['WaterPipe'] = '110';
    StatusType2['WheelRim'] = '46';
    StatusType2['Damage'] = '137';
    StatusType2['Drivetrain'] = '79';
    StatusType2['FuelRig'] = '71';
    StatusType2['Illness'] = '139';
    StatusType2['OilLine'] = '70';
    StatusType2['Safety'] = '78';
    StatusType2['SafetyConcerns'] = '89';
    StatusType2['Stalled'] = '85';
    StatusType2['TrackRod'] = '49';
    StatusType2['Plus20Laps'] = '127';
    StatusType2['Plus21Laps'] = '120';
    StatusType2['Plus23Laps'] = '119';
    StatusType2['Plus26Laps'] = '58';
    StatusType2['Plus29Laps'] = '118';
    StatusType2['Plus30Laps'] = '123';
    StatusType2['Plus42Laps'] = '128';
    StatusType2['Plus44Laps'] = '122';
    StatusType2['Plus46Laps'] = '125';
    StatusType2['BrakeDuct'] = '135';
    StatusType2['CoolingSystem'] = '141';
    StatusType2['Crankshaft'] = '87';
    StatusType2['CVJoint'] = '102';
    StatusType2['Debris'] = '138';
    StatusType2['DriverSeat'] = '28';
    StatusType2['EngineFire'] = '56';
    StatusType2['EngineMisfire'] = '129';
    StatusType2['EyeInjury'] = '107';
    StatusType2['LaunchControl'] = '72';
    StatusType2['NotRestarted'] = '90';
    StatusType2['Refuelling'] = '35';
    StatusType2['SafetyBelt'] = '93';
    StatusType2['Seat'] = '136';
    StatusType2['TyrePuncture'] = '59';
    StatusType2['Underweight'] = '92';
    return StatusType2;
})(StatusType || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    Api,
    BaseApi,
    StatusType,
});
