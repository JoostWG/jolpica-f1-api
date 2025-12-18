import { StatusType } from '../enums/StatusType.js';

interface StatusOption {
    status?: StatusType;
}

interface SeasonOption {
    season?: 'current' | (number & {});
}

interface RoundOption {
    round?: number | 'last' | 'next';
}

interface CircuitOption {
    circuit?: string;
}

interface DriverOption {
    driver?: string;
}

interface TeamOption {
    team?: string;
}

interface LapOption {
    lap?: number;
}

interface PitStopOption {
    pitStopNumber?: number;
}

interface FastestRankOption {
    fastestRank?: number;
}

interface GridPositionOption {
    gridPosition?: number;
}

interface FinishPositionOption {
    finishPosition?: number;
}

interface DriverStandingOption {
    driverStanding?: number;
}

interface QualifyingResultOption {
    qualifying?: number;
}

interface TeamStandingOption {
    teamStanding?: number;
}

type CircuitOptions =
    & SeasonOption
    & RoundOption
    & DriverOption
    & FastestRankOption
    & GridPositionOption
    & FinishPositionOption
    & StatusOption
    & TeamOption
    & CircuitOption;

type DriverStandingOptions =
    & Required<SeasonOption>
    & RoundOption
    & DriverOption
    & DriverStandingOption;

type DriverOptions =
    & SeasonOption
    & RoundOption
    & CircuitOption
    & FastestRankOption
    & GridPositionOption
    & FinishPositionOption
    & StatusOption
    & TeamOption
    & DriverOption;

type LapOptions =
    & Required<SeasonOption>
    & Required<RoundOption>
    & DriverOption
    & LapOption
    & TeamOption;

type PitStopOptions =
    & Required<SeasonOption>
    & Required<RoundOption>
    & DriverOption
    & LapOption
    & PitStopOption;

type QualifyingResultOptions =
    & SeasonOption
    & RoundOption
    & CircuitOption
    & DriverOption
    & GridPositionOption
    & FastestRankOption
    & StatusOption
    & TeamOption
    & QualifyingResultOption;

type RaceOptions =
    & SeasonOption
    & RoundOption
    & CircuitOption
    & DriverOption
    & FinishPositionOption
    & GridPositionOption
    & StatusOption
    & TeamOption;

type ResultOptions =
    & SeasonOption
    & RoundOption
    & CircuitOption
    & DriverOption
    & FastestRankOption
    & GridPositionOption
    & StatusOption
    & TeamOption
    & FinishPositionOption;

type SeasonOptions =
    & CircuitOption
    & DriverOption
    & GridPositionOption
    & StatusOption
    & TeamOption;

type SprintResultOptions =
    & CircuitOption
    & DriverOption
    & GridPositionOption
    & StatusOption
    & TeamOption;

type TeamStandingOptions =
    & Required<SeasonOption>
    & RoundOption
    & TeamOption
    & TeamStandingOption;

type TeamOptions =
    & SeasonOption
    & RoundOption
    & CircuitOption
    & FastestRankOption
    & GridPositionOption
    & FinishPositionOption
    & StatusOption;

export type { CircuitOption, CircuitOptions, DriverOption, DriverOptions, DriverStandingOption, DriverStandingOptions, FastestRankOption, FinishPositionOption, GridPositionOption, LapOption, LapOptions, PitStopOption, PitStopOptions, QualifyingResultOption, QualifyingResultOptions, RaceOptions, ResultOptions, RoundOption, SeasonOption, SeasonOptions, SprintResultOptions, StatusOption, TeamOption, TeamOptions, TeamStandingOption, TeamStandingOptions };
