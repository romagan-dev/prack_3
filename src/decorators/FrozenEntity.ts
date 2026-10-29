
export function FrozenEntity() {
    return function <T extends new (...args: never[]) => object>(constructor: T): void {
        Object.freeze(constructor);
        Object.freeze(constructor.prototype);
    };
}

