import type { StatusType } from '../enums';

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
export interface StatusOption {
    status?: StatusType;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
export interface SeasonOption {
    season?: 'current' | (number & {});
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
export interface RoundOption {
    round?: 'last' | 'next' | number;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
export interface CircuitOption {
    circuit?: string;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
export interface DriverOption {
    driver?: string;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
export interface TeamOption {
    team?: string;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
export interface LapOption {
    lap?: number;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
export interface PitStopOption {
    pitStopNumber?: number;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
export interface FastestRankOption {
    fastestRank?: number;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
export interface GridPositionOption {
    gridPosition?: number;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
export interface FinishPositionOption {
    finishPosition?: number;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
export interface DriverStandingOption {
    driverStanding?: number;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
export interface QualifyingResultOption {
    qualifying?: number;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
export interface TeamStandingOption {
    teamStanding?: number;
}

/**
 * @category Options
 *
 * @inline
 *
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
 * @category Options
 *
 * @inline
 *
 * @since 2.1.0
 */
export type DriverStandingOptions =
    & Required<SeasonOption>
    & RoundOption
    & DriverOption
    & DriverStandingOption;

/**
 * @category Options
 *
 * @inline
 *
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
 * @category Options
 *
 * @inline
 *
 * @since 2.1.0
 */
export type LapOptions =
    & Required<SeasonOption>
    & Required<RoundOption>
    & DriverOption
    & LapOption
    & TeamOption;

/**
 * @category Options
 *
 * @inline
 *
 * @since 2.1.0
 */
export type PitStopOptions =
    & Required<SeasonOption>
    & Required<RoundOption>
    & DriverOption
    & LapOption
    & PitStopOption;

/**
 * @category Options
 *
 * @inline
 *
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
 * @category Options
 *
 * @inline
 *
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
 * @category Options
 *
 * @inline
 *
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
 * @category Options
 *
 * @inline
 *
 * @since 2.1.0
 */
export type SeasonOptions =
    & CircuitOption
    & DriverOption
    & GridPositionOption
    & StatusOption
    & TeamOption;

/**
 * @category Options
 *
 * @inline
 *
 * @since 2.1.0
 */
export type SprintResultOptions =
    & CircuitOption
    & DriverOption
    & GridPositionOption
    & StatusOption
    & TeamOption;

/**
 * @category Options
 *
 * @inline
 *
 * @since 2.1.0
 */
export type TeamStandingOptions =
    & Required<SeasonOption>
    & RoundOption
    & TeamOption
    & TeamStandingOption;

/**
 * @category Options
 *
 * @inline
 *
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
