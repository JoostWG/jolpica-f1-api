import type { SuccessResponse } from '.';

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface ConstructorApiData {
    constructorId?: string;
    url?: string;
    name: string;
    nationality?: string;
}

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
export type ConstructorsResponse = SuccessResponse<{
    ConstructorTable: {
        Constructors: ConstructorApiData[];
    };
}>;
