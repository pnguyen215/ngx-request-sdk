export class Enum {
    static getEnumValues<T extends number | string>(eValue: any): T[] {
        return Object.keys(eValue)
            .filter(key => isNaN(Number(key)))
            .map(key => eValue[key]);
    };
}