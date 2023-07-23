export class ObjectX {
    static allNotNull(...values: any[]): boolean {
        return values.every(item => item !== null && item !== undefined && item !== '');
    };
    static isNull(...values: any[]): boolean {
        return !this.allNotNull(values);
    }
}