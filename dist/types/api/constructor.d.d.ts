import { SuccessResponse } from './common.d.js';

/**
 * @category Api data
 *
 * @since 1.0.1
 */
interface ConstructorApiData {
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
type ConstructorsResponse = SuccessResponse<{
    ConstructorTable: {
        Constructors: ConstructorApiData[];
    };
}>;

export type { ConstructorApiData, ConstructorsResponse };
