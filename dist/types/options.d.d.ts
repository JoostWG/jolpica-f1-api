import { StatusType } from '../enums/StatusType.js';

/**
 * @category Options
 *
 * @since 1.0.1
 */
interface StatusOption {
    status: StatusType;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
interface SeasonOption {
    season: 'current' | (number & {});
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
interface RoundOption {
    round: 'last' | 'next' | number;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
interface CircuitOption {
    circuit: string;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
interface DriverOption {
    driver: string;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
interface TeamOption {
    team: string;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
interface LapOption {
    lap: number;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
interface PitStopOption {
    pitStopNumber: number;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
interface FastestRankOption {
    fastestRank: number;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
interface GridPositionOption {
    gridPosition: number;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
interface FinishPositionOption {
    finishPosition: number;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
interface DriverStandingOption {
    driverStanding: number;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
interface QualifyingResultOption {
    qualifying: number;
}

/**
 * @category Options
 *
 * @since 1.0.1
 */
interface TeamStandingOption {
    teamStanding: number;
}

/**
 * @category Options
 *
 * @since 2.1.0
 */
type CircuitOptions = Partial<
    & SeasonOption
    & RoundOption
    & DriverOption
    & FastestRankOption
    & GridPositionOption
    & FinishPositionOption
    & StatusOption
    & TeamOption
    & CircuitOption
>;

/**
 * @category Options
 *
 * @since 2.1.0
 */
type DriverStandingOptions =
    & Required<SeasonOption>
    & Partial<
        & RoundOption
        & DriverOption
        & DriverStandingOption
    >;

/**
 * @category Options
 *
 * @since 2.1.0
 */
type DriverOptions = Partial<
    & SeasonOption
    & RoundOption
    & CircuitOption
    & FastestRankOption
    & GridPositionOption
    & FinishPositionOption
    & StatusOption
    & TeamOption
    & DriverOption
>;

/**
 * @category Options
 *
 * @since 2.1.0
 */
type LapOptions =
    & Required<SeasonOption & RoundOption>
    & Partial<
        & DriverOption
        & LapOption
        & TeamOption
    >;

/**
 * @category Options
 *
 * @since 2.1.0
 */
type PitStopOptions =
    & Required<SeasonOption & RoundOption>
    & Partial<
        & DriverOption
        & LapOption
        & TeamOption
    >;

/**
 * @category Options
 *
 * @since 2.1.0
 */
type QualifyingResultOptions = Partial<
    & SeasonOption
    & RoundOption
    & CircuitOption
    & DriverOption
    & GridPositionOption
    & FastestRankOption
    & StatusOption
    & TeamOption
    & QualifyingResultOption
>;

/**
 * @category Options
 *
 * @since 2.1.0
 */
type RaceOptions = Partial<
    & SeasonOption
    & RoundOption
    & CircuitOption
    & DriverOption
    & FinishPositionOption
    & GridPositionOption
    & StatusOption
    & TeamOption
>;

/**
 * @category Options
 *
 * @since 2.1.0
 */
type ResultOptions = Partial<
    & SeasonOption
    & RoundOption
    & CircuitOption
    & DriverOption
    & FastestRankOption
    & GridPositionOption
    & StatusOption
    & TeamOption
    & FinishPositionOption
>;

/**
 * @category Options
 *
 * @since 2.1.0
 */
type SeasonOptions = Partial<
    & CircuitOption
    & DriverOption
    & GridPositionOption
    & StatusOption
    & TeamOption
>;

/**
 * @category Options
 *
 * @since 2.1.0
 */
type SprintResultOptions = Partial<
    & CircuitOption
    & DriverOption
    & GridPositionOption
    & StatusOption
    & TeamOption
>;

/**
 * @category Options
 *
 * @since 3.0.0
 */
type StatusOptions = Partial<
    & SeasonOption
    & RoundOption
    & CircuitOption
    & TeamOption
    & DriverOption
    & GridPositionOption
    & FinishPositionOption
    & FastestRankOption
    & StatusOption
>;

/**
 * @category Options
 *
 * @since 2.1.0
 */
type TeamStandingOptions =
    & Required<SeasonOption>
    & Partial<
        & RoundOption
        & TeamOption
        & TeamStandingOption
    >;

/**
 * @category Options
 *
 * @since 2.1.0
 */
type TeamOptions = Partial<
    & SeasonOption
    & RoundOption
    & CircuitOption
    & FastestRankOption
    & GridPositionOption
    & FinishPositionOption
    & StatusOption
>;

export type { CircuitOption, CircuitOptions, DriverOption, DriverOptions, DriverStandingOption, DriverStandingOptions, FastestRankOption, FinishPositionOption, GridPositionOption, LapOption, LapOptions, PitStopOption, PitStopOptions, QualifyingResultOption, QualifyingResultOptions, RaceOptions, ResultOptions, RoundOption, SeasonOption, SeasonOptions, SprintResultOptions, StatusOption, StatusOptions, TeamOption, TeamOptions, TeamStandingOption, TeamStandingOptions };
