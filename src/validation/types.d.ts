export type Validator<T> = (value: unknown, path: string) => T;

export type ValidatorType<V extends Validator<unknown>> = V extends Validator<infer T> ? T : never;

export type Shape<T extends Record<string, unknown>> = { [K in keyof T]: Validator<T[K]> };
