import type { Api } from '../Api';

export abstract class Model {
    public constructor(protected readonly api: Api) {
        //
    }
}
