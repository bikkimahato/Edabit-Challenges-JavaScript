// Check if One Array can be Nested in Another
// https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj

function canNest(arr1, arr2) {
    return ((Math.min(...arr1) > Math.min(...arr2)) &&
        (Math.max(...arr1) < Math.max(...arr2)))
}