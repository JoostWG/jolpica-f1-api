import { HttpError } from './HttpError.js';

declare class NotFound extends HttpError {
    constructor(message?: string);
}

export { NotFound };
