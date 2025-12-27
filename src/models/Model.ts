import type { Api } from '../Api';
import type { Validator } from '../Validator';

export abstract class Model {
    protected readonly validator: Validator;

    public constructor(protected readonly api: Api) {
        this.validator = this.api.validator;
    }
}
