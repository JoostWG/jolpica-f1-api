interface SeasonOption {
    season?: 'current' | (string & {});
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

export type { CircuitOption, DriverOption, FastestRankOption, FinishPositionOption, GridPositionOption, LapOption, PitStopOption, RoundOption, SeasonOption, TeamOption };
