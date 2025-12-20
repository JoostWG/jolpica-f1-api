import { SuccessResponse } from './common.d.js';

/**
 * @category Api data
 */
interface ConstructorApiData {
    constructorId?: string;
    url?: string;
    name: string;
    nationality?: string;
}

/**
 * @category Api responses
 */
type ConstructorsResponse = SuccessResponse<{
    ConstructorTable: {
        Constructors: ConstructorApiData[];
    };
}>;

export type { ConstructorApiData, ConstructorsResponse };
