import type {
    AverageSpeed,
    AverageSpeedApiData,
    Circuit,
    CircuitApiData,
    ConstructorApiData,
    ConstructorStandingApiData,
    DateTimeApiData,
    Driver,
    DriverApiData,
    DriverStanding,
    DriverStandingApiData,
    FastestLap,
    FastestLapApiData,
    FastestLapTime,
    FastestLapTimeApiData,
    FinishingTime,
    FinishingTimeApiData,
    Lap,
    LapApiData,
    Location,
    LocationApiData,
    PitStop,
    PitStopApiData,
    QualifyingResult,
    QualifyingResultApiData,
    Race,
    RaceApiData,
    Result,
    ResultApiData,
    Season,
    SeasonApiData,
    SessionDateTime,
    SprintResult,
    SprintResultApiData,
    Status,
    StatusApiData,
    Team,
    TeamStanding,
    Timing,
    TimingApiData,
} from './types';

export class Data {
    public createAverageSpeed(data: AverageSpeedApiData): AverageSpeed {
        return {
            units: data.units,
            speed: Number(data.speed),
        };
    }

    public createCircuit(data: CircuitApiData): Circuit {
        return {
            id: data.circuitId,
            wikiUrl: data.url,
            name: data.circuitName,
            location: this.createLocation(data.Location),
        };
    }

    public createDriverStanding(data: DriverStandingApiData): DriverStanding {
        return {
            position: data.position !== undefined ? Number(data.position) : null,
            positionText: data.positionText,
            points: Number(data.points),
            wins: Number(data.wins),
            driver: this.createDriver(data.Driver),
            teams: data.Constructors.map(this.createTeam.bind(this)),
        };
    }

    public createFastestLap(data: FastestLapApiData): FastestLap {
        return {
            rank: Number(data.rank),
            lap: Number(data.lap),
            time: this.createFastestLapTime(data.Time),
            averageSpeed: this.createAverageSpeed(data.AverageSpeed),
        };
    }

    public createDriver(data: DriverApiData): Driver {
        return {
            id: data.driverId,
            wikiUrl: data.url,
            firstName: data.givenName,
            lastName: data.familyName,
            dateOfBirth: new Date(data.dateOfBirth),
            nationality: data.nationality,
            number: data.permanentNumber !== undefined ? Number(data.permanentNumber) : null,
            code: data.code ?? null,
        };
    }

    public createFastestLapTime(data: FastestLapTimeApiData): FastestLapTime {
        return {
            time: data.time,
        };
    }

    public createFinishingTime(data: FinishingTimeApiData): FinishingTime {
        return {
            milliseconds: Number(data.millis),
            time: data.time,
        };
    }

    public createLap(data: LapApiData): Lap {
        return {
            number: Number(data.number),
            timings: data.Timings.map(this.createTiming.bind(this)),
        };
    }

    public createTiming(data: TimingApiData): Timing {
        return {
            driverId: data.driverId,
            position: Number(data.position),
            time: data.time,
        };
    }

    public createLocation(data: LocationApiData): Location {
        return {
            latitude: Number(data.lat),
            longitude: Number(data.long),
            locality: data.locality,
            country: data.country,
        };
    }

    public createPitStop(data: PitStopApiData): PitStop {
        return {
            driverId: data.driverId,
            lap: data.lap !== undefined ? Number(data.lap) : null,
            stop: data.stop !== undefined ? Number(data.stop) : null,
            time: data.time ?? null,
            duration: data.duration !== undefined ? Number(data.duration) : null,
        };
    }

    public createQualifyingResult(data: QualifyingResultApiData): QualifyingResult {
        return {
            number: Number(data.number),
            position: data.position !== undefined ? Number(data.position) : null,
            driver: this.createDriver(data.Driver),
            team: this.createTeam(data.Constructor),
            q1: data.Q1 ?? null,
            q2: data.Q2 ?? null,
            q3: data.Q3 ?? null,
        };
    }

    public createRace(data: RaceApiData): Race {
        return {
            season: data.season,
            round: Number(data.round),
            wikiUrl: data.url ?? null,
            name: data.raceName,
            circuit: this.createCircuit(data.Circuit),
            date: data.date,
            time: data.time ?? null,
            firstPractice: data.FirstPractice !== undefined
                ? this.createSessionDateTime(data.FirstPractice)
                : null,
            secondPractice: data.SecondPractice !== undefined
                ? this.createSessionDateTime(data.SecondPractice)
                : null,
            thirdPractice: data.ThirdPractice !== undefined
                ? this.createSessionDateTime(data.ThirdPractice)
                : null,
            qualifying: data.Qualifying !== undefined
                ? this.createSessionDateTime(data.Qualifying)
                : null,
            sprint: data.Sprint !== undefined
                ? this.createSessionDateTime(data.Sprint)
                : null,
            sprintQualifying: data.SprintQualifying !== undefined
                ? this.createSessionDateTime(data.SprintQualifying)
                : null,
            sprintShootout: data.SprintShootout !== undefined
                ? this.createSessionDateTime(data.SprintShootout)
                : null,
        };
    }

    public createResult(data: ResultApiData): Result {
        return {
            number: Number(data.number),
            position: data.position,
            positionText: data.positionText,
            points: Number(data.points),
            driver: this.createDriver(data.Driver),
            team: data.Constructor !== undefined
                ? this.createTeam(data.Constructor)
                : null,
            grid: data.grid !== undefined ? Number(data.grid) : null,
            laps: data.laps !== undefined ? Number(data.laps) : null,
            status: data.status ?? null,
            fastestLap: this.createFastestLap(data.FastestLap),
            finishingTime: data.Time !== undefined ? this.createFinishingTime(data.Time) : null,
        };
    }

    public createSeason(data: SeasonApiData): Season {
        return {
            year: Number(data.season),
            wikiUrl: data.url,
        };
    }

    public createSessionDateTime(data: DateTimeApiData): SessionDateTime {
        return {
            date: data.date ?? null,
            time: data.time ?? null,
        };
    }

    public createSprintResult(data: SprintResultApiData): SprintResult {
        return {
            number: Number(data.number),
            position: data.position,
            positionText: data.positionText,
            points: Number(data.points),
            driver: this.createDriver(data.Driver),
            team: data.Constructor !== undefined
                ? this.createTeam(data.Constructor)
                : null,
            grid: data.grid !== undefined ? Number(data.grid) : null,
            laps: data.laps !== undefined ? Number(data.laps) : null,
            status: data.status ?? null,
            finishingTime: data.Time !== undefined ? this.createFinishingTime(data.Time) : null,
            fastestLap: data.FastestLap !== undefined
                ? this.createFastestLap(data.FastestLap)
                : null,
        };
    }

    public createStatus(data: StatusApiData): Status {
        return {
            id: data.statusId,
            count: Number(data.count),
            name: data.status,
        };
    }

    public createTeamStanding(data: ConstructorStandingApiData): TeamStanding {
        return {
            position: data.position ?? null,
            positionText: data.positionText,
            points: Number(data.points),
            wins: Number(data.wins),
            team: this.createTeam(data.Constructor),
        };
    }

    public createTeam(data: ConstructorApiData): Team {
        return {
            id: data.constructorId ?? null,
            wikiUrl: data.url ?? null,
            name: data.name,
            nationality: data.nationality ?? null,
        };
    }
}
