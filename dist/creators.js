'use strict';
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);

// src/creators.ts
var creators_exports = {};
__export(creators_exports, {
    Data: () => Data,
});
module.exports = __toCommonJS(creators_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    Data,
});
