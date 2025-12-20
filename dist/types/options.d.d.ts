import { StatusType } from '../enums/StatusType.js';

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
interface StatusOption {
    status?: StatusType;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
interface SeasonOption {
    season?: 'current' | (number & {});
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
interface RoundOption {
    round?: number | 'last' | 'next';
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
interface CircuitOption {
    circuit?: string;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
interface DriverOption {
    driver?: string;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
interface TeamOption {
    team?: string;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
interface LapOption {
    lap?: number;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
interface PitStopOption {
    pitStopNumber?: number;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
interface FastestRankOption {
    fastestRank?: number;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
interface GridPositionOption {
    gridPosition?: number;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
interface FinishPositionOption {
    finishPosition?: number;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
interface DriverStandingOption {
    driverStanding?: number;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
interface QualifyingResultOption {
    qualifying?: number;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 1.0.1
 */
interface TeamStandingOption {
    teamStanding?: number;
}

/**
 * @category Options
 *
 * @inline
 *
 * @since 2.1.0
 */
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

/**
 * @category Options
 *
 * @inline
 *
 * @since 2.1.0
 */
type DriverStandingOptions =
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

/**
 * @category Options
 *
 * @inline
 *
 * @since 2.1.0
 */
type LapOptions =
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
type PitStopOptions =
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

/**
 * @category Options
 *
 * @inline
 *
 * @since 2.1.0
 */
type RaceOptions =
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

/**
 * @category Options
 *
 * @inline
 *
 * @since 2.1.0
 */
type SeasonOptions =
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
type SprintResultOptions =
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
type TeamStandingOptions =
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
type TeamOptions =
    & SeasonOption
    & RoundOption
    & CircuitOption
    & FastestRankOption
    & GridPositionOption
    & FinishPositionOption
    & StatusOption;

export type { CircuitOption, CircuitOptions, DriverOption, DriverOptions, DriverStandingOption, DriverStandingOptions, FastestRankOption, FinishPositionOption, GridPositionOption, LapOption, LapOptions, PitStopOption, PitStopOptions, QualifyingResultOption, QualifyingResultOptions, RaceOptions, ResultOptions, RoundOption, SeasonOption, SeasonOptions, SprintResultOptions, StatusOption, TeamOption, TeamOptions, TeamStandingOption, TeamStandingOptions };
