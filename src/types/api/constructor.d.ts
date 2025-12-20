import type { SuccessResponse } from '.';

/**
 * @category Api data
 */
export interface ConstructorApiData {
    constructorId?: string;
    url?: string;
    name: string;
    nationality?: string;
}

/**
 * @category Api responses
 */
export type ConstructorsResponse = SuccessResponse<{
    ConstructorTable: {
        Constructors: ConstructorApiData[];
    };
}>;
