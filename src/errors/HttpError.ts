/**
 * @category Errors
 *
 * @since 1.0.1
 */
export class HttpError extends Error {
    public constructor(public readonly status: number, message?: string) {
        super(message);
    }
}
