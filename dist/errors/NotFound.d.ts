import { AxiosResponse } from 'axios';
import { HttpError } from './HttpError.js';

declare class NotFound extends HttpError {
    readonly response: AxiosResponse;
    constructor(response: AxiosResponse, message?: string);
}

export { NotFound };
