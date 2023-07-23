export class CollectionX {
    static filterBy<T>(array: T[], condition: (item: T) => boolean): T[] {
        return array.filter(condition);
    };
    static transformTo<T, R>(array: T[], transform: (item: T) => R): R[] {
        return array.map(transform);
    };
    static isEmpty(arrays: any): boolean {
        if (!Array.isArray(arrays) || !arrays.every(item => item !== null && item !== undefined && item !== '')) {
            return false;
        }
        return arrays.length === 0;
    };
    static isEmptyMap(map: Map<any, any>): boolean {
        return map !== null && map !== undefined && map.size === 0;
    };
    static isNotEmptyMap(map: Map<any, any>): boolean {
        return !this.isEmptyMap(map);
    };
    static isEmptySet(set: Set<any>): boolean {
        return set !== null && set !== undefined && set.size === 0;
    };
    static isNotEmptySet(set: Set<any>): boolean {
        return !this.isEmptySet(set);
    };
    static isIncludes<T>(data: T[], element: T): boolean {
        for (const item of data) {
            if (item === element) {
                return true;
            }
            if (Array.isArray(item)) {
                if (this.isIncludes(item, element)) {
                    return true;
                }
            } else if (typeof item === 'object' && item !== null) {
                const values = Object.values(item);
                if (this.isIncludes(values, element)) {
                    return true;
                }
            }
        }
        return false;
    };
} 