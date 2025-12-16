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
