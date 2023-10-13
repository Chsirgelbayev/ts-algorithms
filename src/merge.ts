function merge(firstArr: number[], secondArr: number[]): number[] {
    let i = 0
    let j = 0
    const result: number[] = []

    while (firstArr.length > i || secondArr.length > j) {
        const first= firstArr[i]
        const second = secondArr[j]

        if(first === undefined) {
            result.push(second)
            j++
            continue
        }

        if(second === undefined) {
            result.push(first)
            i++
            continue
        }

        if(first === second) {
            result.push(first, second)
            continue
        }

        if(first > second) {
            result.push(second)
            j++
        }

        if(second > first) {
            result.push(first)
            i++
        }

    }

    return result
}