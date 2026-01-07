type Validator<T> = (value: unknown, path: string) => T;

type ValidatorType<V extends Validator<unknown>> = V extends Validator<infer T> ? T : never;

type Shape<T extends Record<string, unknown>> = { [K in keyof T]: Validator<T[K]> };

export type { Shape, Validator, ValidatorType };
