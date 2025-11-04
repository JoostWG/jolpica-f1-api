'use strict';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all) {
        __defProp(target, name, { get: all[name], enumerable: true });
    }
};
var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === 'object' || typeof from === 'function') {
        for (let key of __getOwnPropNames(from)) {
            if (!__hasOwnProp.call(to, key) && key !== except) {
                __defProp(to, key, {
                    get: () => from[key],
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
                });
            }
        }
    }
    return to;
};
var __toESM = (
    mod,
    isNodeMode,
    target,
) => (target = mod != null ? __create(__getProtoOf(mod)) : {},
    __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule
            ? __defProp(target, 'default', { value: mod, enumerable: true })
            : target,
        mod,
    ));
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);

// src/BaseApi.ts
var BaseApi_exports = {};
__export(BaseApi_exports, {
    BaseApi: () => BaseApi,
});
module.exports = __toCommonJS(BaseApi_exports);
var import_axios = __toESM(require('axios'));

// src/errors/HttpError.ts
var HttpError = class extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
};

// src/errors/BadRequest.ts
var BadRequest = class extends HttpError {
    constructor(detail) {
        super(400, detail);
        this.detail = detail;
    }
};

// src/errors/NotFound.ts
var NotFound = class extends HttpError {
    constructor(message) {
        super(404, message);
    }
};

// src/BaseApi.ts
var BaseApi = class {
    constructor(cache) {
        this.cache = cache;
        this.axios = import_axios.default.create({
            baseURL: 'https://api.jolpi.ca/ergast/f1',
            headers: new import_axios.AxiosHeaders().setContentType('application/json'),
        });
    }
    // Multiple
    async get(path, pagination) {
        if (this.cache) {
            const data2 = await this.cache.get(path, pagination);
            if (data2 !== null) {
                return data2;
            }
        }
        const response = await this.axios.get(`${path}.json`, {
            params: pagination,
        });
        if (response.status === 404) {
            throw new NotFound();
        }
        if (this.responseIsBadRequest(response)) {
            throw new BadRequest(response.data.detail);
        }
        if (response.status !== 200) {
            throw new HttpError(response.status);
        }
        const data = response.data;
        if (this.cache) {
            await this.cache.set(data, path, pagination);
        }
        return data;
    }
    responseIsBadRequest(response) {
        return response.status === 400;
    }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    BaseApi,
});
