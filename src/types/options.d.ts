import type { StatusType } from '../enums';

export interface StatusOption {
    status?: StatusType;
}

export interface SeasonOption {
    season?: 'current' | (number & {});
}

export interface RoundOption {
    round?: number | 'last' | 'next';
}

export interface CircuitOption {
    circuit?: string;
}

export interface DriverOption {
    driver?: string;
}

export interface TeamOption {
    team?: string;
}

export interface LapOption {
    lap?: number;
}

export interface PitStopOption {
    pitStopNumber?: number;
}

export interface FastestRankOption {
    fastestRank?: number;
}

export interface GridPositionOption {
    gridPosition?: number;
}

export interface FinishPositionOption {
    finishPosition?: number;
}

export type CircuitOptions =
    & SeasonOption
    & RoundOption
    & DriverOption
    & FastestRankOption
    & GridPositionOption
    & FinishPositionOption
    & StatusOption
    & TeamOption;

export type DriverStandingOptions = Required<SeasonOption> & RoundOption & DriverOption;

export type DriverOptions =
    & SeasonOption
    & RoundOption
    & CircuitOption
    & FastestRankOption
    & GridPositionOption
    & FinishPositionOption
    & StatusOption
    & TeamOption;

export type LapOptions =
    & Required<SeasonOption>
    & Required<RoundOption>
    & DriverOption
    & LapOption
    & TeamOption;

export type PitStopOptions =
    & Required<SeasonOption>
    & Required<RoundOption>
    & DriverOption
    & LapOption
    & PitStopOption;

export type QualifyingResultOptions =
    & SeasonOption
    & RoundOption
    & CircuitOption
    & DriverOption
    & GridPositionOption
    & FastestRankOption
    & StatusOption
    & TeamOption;

export type RaceOptions =
    & SeasonOption
    & RoundOption
    & CircuitOption
    & DriverOption
    & FinishPositionOption
    & GridPositionOption
    & StatusOption
    & TeamOption;

export type ResultOptions =
    & SeasonOption
    & RoundOption
    & CircuitOption
    & DriverOption
    & FastestRankOption
    & GridPositionOption
    & StatusOption
    & TeamOption;

export type SeasonOptions =
    & CircuitOption
    & DriverOption
    & GridPositionOption
    & StatusOption
    & TeamOption;

export type SprintResultOptions =
    & CircuitOption
    & DriverOption
    & GridPositionOption
    & StatusOption
    & TeamOption;

export type TeamStandingOptions = Required<SeasonOption> & RoundOption & TeamOption;

export type TeamOptions =
    & SeasonOption
    & RoundOption
    & CircuitOption
    & FastestRankOption
    & GridPositionOption
    & FinishPositionOption
    & StatusOption;
