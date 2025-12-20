/**
 * @category Errors
 *
 * @since 1.0.1
 */
declare class HttpError extends Error {
    readonly status: number;
    constructor(status: number, message?: string);
}

export { HttpError };
