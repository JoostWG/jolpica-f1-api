import { HttpError } from './HttpError.js';
import './JolpicaError.js';

/**
 * @category Errors
 *
 * @since 1.0.1
 */
declare class BadRequest extends HttpError {
    readonly detail: string;
    constructor(detail: string);
}

export { BadRequest };
