declare global {
    interface Array<T> {
        groupBy(fn: (value: T) => string): Record<string, T[]>
    }
}

Array.prototype.groupBy = function(fn) {
    const cache = {}

    for(const value of this) {
        const result = fn(value)

        if(cache[result]) {
            cache[result].push(value)
        } else {
            cache[result] = [value]
        }
    }

    return cache
}