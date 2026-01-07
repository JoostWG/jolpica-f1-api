import { JolpicaError } from './JolpicaError.js';

/**
 * @category Errors
 *
 * @since 1.0.1
 */
declare class HttpError extends JolpicaError {
    readonly status: number;
    constructor(status: number, message?: string);
}

export { HttpError };
