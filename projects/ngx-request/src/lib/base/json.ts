import { ObjectX } from './object';

export class JsonX {
    static fromJsonTo(json: string): any {
        return ObjectX.allNotNull(json) ? JSON.parse(json) : json;
    };
    static toJson(value: any, ident?: number): string {
        return ObjectX.allNotNull(value) ? JSON.stringify(value, null, ident ?? 2) : '';
    };
    static toJsonDefault(value: any): string {
        return ObjectX.allNotNull(value) ? JSON.stringify(value) : '';
    }
}