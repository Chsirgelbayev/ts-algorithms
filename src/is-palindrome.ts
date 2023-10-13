function isPalindrome(str: string): boolean {
    let left: number = 0
    let right: number = str.length - 1

    while (right > left) {
        if (str[left] !== str[right]) {
            return false
        }

        left++
        right--
    }

    return true
}