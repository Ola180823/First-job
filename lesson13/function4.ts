//1
type Mapper<T, U> = ( value: T, index: number, array: T[]) => U;
export function map<T, U>(mapper: Mapper<T, U> , input: T[]): U[]|((subInput: T[])=>
U[])| typeof map {
    if (arguments.length === 0) {
        return map as typeof map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]): U[] | typeof subFunction {
            if (arguments.length === 0) {
                return subFunction as typeof subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}
// 2
type Filterer<T> = (value: T, index: number, array: T[]) => boolean;
export function filter<T>(filterer: Filterer <T>, input: T[]): T[] |
((subInput: T[]) => T[])| typeof filter {
    if (arguments.length === 0) {
        return filter as typeof filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]): T[] | typeof subFunction {
            if (arguments.length === 0) {
                return subFunction as typeof subFunction ;
            }
            return subInput.filter(filterer);
        };
    }
    return input.filter(filterer);
}
//3
export function add(a?: number, b?: number): number | ((subB: number) =>
number) | typeof add {
    if (arguments.length ===0) {
        return add as typeof add ;
    }
    if (arguments.length === 1) {
        return function subFunction(subB: number):
        number | typeof subFunction {
            if (arguments.length ===0) {
                return subFunction as typeof  subFunction;
            }
            return a + subB!;
        };
    }
    return a + b!;
}

