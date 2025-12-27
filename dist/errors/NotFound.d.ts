import { AxiosResponse } from 'axios';
import { HttpError } from './HttpError.js';

/**
 * @category Errors
 *
 * @since 1.0.1
 */
declare class NotFound extends HttpError {
    /**
     * @since 1.1.0
     */
    readonly response: AxiosResponse;
    constructor(
    /**
     * @since 1.1.0
     */
    response: AxiosResponse, message?: string);
}

export { NotFound };
