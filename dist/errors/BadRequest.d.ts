import { HttpError } from './HttpError.js';

declare class BadRequest extends HttpError {
    readonly detail: string;
    constructor(detail: string);
}

export { BadRequest };
