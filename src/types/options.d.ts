import type { StatusType } from '../enums';

/**
 * @since 1.0.1
 */
export interface StatusOption {
    status?: StatusType;
}

/**
 * @since 1.0.1
 */
export interface SeasonOption {
    season?: 'current' | (number & {});
}

/**
 * @since 1.0.1
 */
export interface RoundOption {
    round?: number | 'last' | 'next';
}

/**
 * @since 1.0.1
 */
export interface CircuitOption {
    circuit?: string;
}

/**
 * @since 1.0.1
 */
export interface DriverOption {
    driver?: string;
}

/**
 * @since 1.0.1
 */
export interface TeamOption {
    team?: string;
}

/**
 * @since 1.0.1
 */
export interface LapOption {
    lap?: number;
}

/**
 * @since 1.0.1
 */
export interface PitStopOption {
    pitStopNumber?: number;
}

/**
 * @since 1.0.1
 */
export interface FastestRankOption {
    fastestRank?: number;
}

/**
 * @since 1.0.1
 */
export interface GridPositionOption {
    gridPosition?: number;
}

/**
 * @since 1.0.1
 */
export interface FinishPositionOption {
    finishPosition?: number;
}

/**
 * @since 1.0.1
 */
export interface DriverStandingOption {
    driverStanding?: number;
}

/**
 * @since 1.0.1
 */
export interface QualifyingResultOption {
    qualifying?: number;
}

/**
 * @since 1.0.1
 */
export interface TeamStandingOption {
    teamStanding?: number;
}

/**
 * @since 2.1.0
 */
export type CircuitOptions =
    & SeasonOption
    & RoundOption
    & DriverOption
    & FastestRankOption
    & GridPositionOption
    & FinishPositionOption
    & StatusOption
    & TeamOption
    & CircuitOption;

/**
 * @since 2.1.0
 */
export type DriverStandingOptions =
    & Required<SeasonOption>
    & RoundOption
    & DriverOption
    & DriverStandingOption;

/**
 * @since 2.1.0
 */
export type DriverOptions =
    & SeasonOption
    & RoundOption
    & CircuitOption
    & FastestRankOption
    & GridPositionOption
    & FinishPositionOption
    & StatusOption
    & TeamOption
    & DriverOption;

/**
 * @since 2.1.0
 */
export type LapOptions =
    & Required<SeasonOption>
    & Required<RoundOption>
    & DriverOption
    & LapOption
    & TeamOption;

/**
 * @since 2.1.0
 */
export type PitStopOptions =
    & Required<SeasonOption>
    & Required<RoundOption>
    & DriverOption
    & LapOption
    & PitStopOption;

/**
 * @since 2.1.0
 */
export type QualifyingResultOptions =
    & SeasonOption
    & RoundOption
    & CircuitOption
    & DriverOption
    & GridPositionOption
    & FastestRankOption
    & StatusOption
    & TeamOption
    & QualifyingResultOption;

/**
 * @since 2.1.0
 */
export type RaceOptions =
    & SeasonOption
    & RoundOption
    & CircuitOption
    & DriverOption
    & FinishPositionOption
    & GridPositionOption
    & StatusOption
    & TeamOption;

/**
 * @since 2.1.0
 */
export type ResultOptions =
    & SeasonOption
    & RoundOption
    & CircuitOption
    & DriverOption
    & FastestRankOption
    & GridPositionOption
    & StatusOption
    & TeamOption
    & FinishPositionOption;

/**
 * @since 2.1.0
 */
export type SeasonOptions =
    & CircuitOption
    & DriverOption
    & GridPositionOption
    & StatusOption
    & TeamOption;

/**
 * @since 2.1.0
 */
export type SprintResultOptions =
    & CircuitOption
    & DriverOption
    & GridPositionOption
    & StatusOption
    & TeamOption;

/**
 * @since 2.1.0
 */
export type TeamStandingOptions =
    & Required<SeasonOption>
    & RoundOption
    & TeamOption
    & TeamStandingOption;

/**
 * @since 2.1.0
 */
export type TeamOptions =
    & SeasonOption
    & RoundOption
    & CircuitOption
    & FastestRankOption
    & GridPositionOption
    & FinishPositionOption
    & StatusOption;
