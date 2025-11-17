import { SuccessResponse } from './common.d.js';

interface ConstructorApiData {
    constructorId?: string;
    url?: string;
    name: string;
    nationality?: string;
}

type ConstructorsResponse = SuccessResponse<{
    ConstructorTable: {
        Constructors: ConstructorApiData[];
    };
}>;

export type { ConstructorApiData, ConstructorsResponse };
