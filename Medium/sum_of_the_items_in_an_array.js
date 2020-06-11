// Sum of the Items in an Array
// https://edabit.com/challenge/27Toh4rACcmRvRLrb

function sumArray(arr) {
    return arr.flat(Infinity).reduce((acc, el) => acc + el, 0)
}