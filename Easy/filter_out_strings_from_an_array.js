// Filter out Strings from an Array
// https://edabit.com/challenge/b2NdDSdkjqFnCTfS8

function filterArray(arr) {
    return arr.filter(el => typeof el === 'number')
}