import { InvalidType } from './errors';

interface ReturnTypes<T> {
    string: string;
    number: number;
    object: T;
    array: T;
    date: Date;
}
interface InputTypes {
    string: string;
    number: number | string;
    object: object;
    array: unknown[];
    date: string;
}

type Filter<TData, TType extends keyof InputTypes> = {
    [K in keyof TData as TData[K] extends InputTypes[TType] | null | undefined ? K : never]:
        TData[K];
};

export class Validator {
    public ensure<TType extends keyof InputTypes, TData, TKey extends keyof Filter<TData, TType>>(
        type: TType,
        data: TData,
        key: TKey,
        required?: false,
    ): Exclude<ReturnTypes<TData[TKey]>[TType], undefined>;
    public ensure<TType extends keyof InputTypes, TData, TKey extends keyof Filter<TData, TType>>(
        type: TType,
        data: TData,
        key: TKey,
        required: true,
    ): Exclude<ReturnTypes<TData[TKey]>[TType], undefined | null>;
    public ensure<TType extends keyof InputTypes, TData, TKey extends keyof Filter<TData, TType>>(
        type: TType,
        data: TData,
        key: TKey,
        required?: boolean,
    ): unknown {
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

            case 'date':
                if (typeof value === 'string') {
                    return new Date(value);
                }

                break;
        }

        if (!required && (value === null || value === undefined)) {
            return null;
        }

        throw new InvalidType(`Expected '${String(key)}' to be ${type}, got ${String(value)}`);
    }
}
