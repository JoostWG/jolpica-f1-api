import { InvalidType } from './errors';

interface Types<T> {
    string: string;
    number: number;
    object: T;
    array: T;
}

export class Validator {
    public ensure<
        TData,
        TKey extends keyof TData,
        TType extends keyof Types<TData[TKey]>,
    >(
        type: TType,
        data: TData,
        key: TKey,
        required?: false,
    ): Exclude<Types<TData[TKey]>[TType], undefined>;
    public ensure<
        TData,
        TKey extends keyof TData,
        TType extends keyof Types<TData[TKey]>,
    >(
        type: TType,
        data: TData,
        key: TKey,
        required: true,
    ): Exclude<Types<TData[TKey]>[TType], undefined | null>;
    public ensure<
        TData,
        TKey extends keyof TData,
        TType extends keyof Types<TData[TKey]>,
    >(type: TType, data: TData, key: TKey, required?: boolean): unknown {
        const value = data[key];

        switch (type) {
            case 'string':
                if (typeof value === 'string') {
                    return value;
                }

                break;

            case 'number':
                if (typeof value === 'number') {
                    return value;
                }

                if (typeof value === 'string' && /^\d+(\.\d+)?$/u.test(value)) {
                    return Number(value);
                }

                break;

            case 'object':
                if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
                    return value;
                }

                break;

            case 'array':
                if (Array.isArray(value)) {
                    return value;
                }

                break;
        }

        if (!required && (value === null || value === undefined)) {
            return null;
        }

        throw new InvalidType(`Expected '${String(key)}' ${type}, got ${String(value)}`);
    }
}
