// Numbers in Strings
// https://edabit.com/challenge/eCPim4XcssdZdvs32

function numInStr(arr) {
    return arr.filter(el => /[0-9]/.test(el))
}