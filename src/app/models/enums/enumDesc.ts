export class EnumDesc<T> {
    value: T;
    description: string;

    static fromObject<T>(object: any): EnumDesc<T> {
        const result = new EnumDesc<T>();

        result.value = object.value;
        result.description = object.description;

        return result;
    }
}