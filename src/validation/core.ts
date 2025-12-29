import { ValidationError } from '../errors';
import type { MRData, SuccessResponse } from '../types';
import type { Shape, Validator } from './types';

/**
 * @internal
 */
export function optional<T>(validator: Validator<T>): Validator<T | undefined> {
    return function(value: unknown, path: string): T | undefined {
        if (value === undefined) {
            return undefined;
        }

        return validator(value, path);
    };
}

/**
 * @internal
 */
export function string({ pattern }: { pattern?: RegExp } = {}): Validator<string> {
    return function(value: unknown, path: string): string {
        if (typeof value !== 'string') {
            throw new ValidationError(`[${path}] should be a string`);
        }

        if (pattern && !pattern.test(value)) {
            throw new ValidationError(`[${path}] doesn't match the pattern`);
        }

        return value;
    };
}

/**
 * @internal
 */
export function integer(): Validator<`${number}`> {
    return string({ pattern: /^-?\d+$/u }) as Validator<`${number}`>;
}

/**
 * @internal
 */
export function decimal(): Validator<`${number}`> {
    return string({ pattern: /^-?\d+(\.\d+)?$/u }) as Validator<`${number}`>;
}

/**
 * @internal
 */
export function object<T extends Record<string, unknown>>(shape: Shape<T>): Validator<T> {
    return function(value: unknown, path: string): T {
        if (typeof value !== 'object' || !value || Array.isArray(value)) {
            throw new ValidationError(`[${path}] should be an object`);
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const result: Record<string, any> = {};

        for (const [key, validator] of Object.entries(shape)) {
            result[key] = validator(
                // @ts-expect-error Not something for now
                value[key],
                `${path}.${key}`,
            );
        }

        return result as T;
    };
}

/**
 * @internal
 */
export function array<T>(validator: Validator<T>): Validator<T[]> {
    return function(value: unknown, path: string): T[] {
        if (!Array.isArray(value)) {
            throw new ValidationError(`[${path}] should be an array`);
        }

        return value.map((item, index) => validator(item, `${path}[${index}]`));
    };
}

/**
 * @internal
 */
export function date(): Validator<string> {
    return string({ pattern: /^\d{4}-\d{2}\d{2}$/u });
}

/**
 * @internal
 */
export function exact<const A extends unknown[]>(...allowed: A): Validator<A[number]> {
    return function(value: unknown, path: string): A[number] {
        for (const x of allowed) {
            if (x === value) {
                return value;
            }
        }

        throw new ValidationError(`[${path}] is not exact match`);
    };
}

/**
 * @internal
 */
export function apiResponse<T extends Record<string, unknown>>(
    dataShape: Shape<T>,
): Validator<SuccessResponse<T>> {
    return object({
        MRData: object({
            xmlns: exact(''),
            series: exact('f1'),
            url: string(),
            limit: integer(),
            offset: integer(),
            total: integer(),
            ...dataShape,
        } as Shape<MRData & T>),
    });
}
