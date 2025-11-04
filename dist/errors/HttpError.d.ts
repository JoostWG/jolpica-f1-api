declare class HttpError extends Error {
    readonly status: number;
    constructor(status: number, message?: string);
}

export { HttpError };
