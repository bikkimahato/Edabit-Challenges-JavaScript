// Oddish vs. Evenish
// https://edabit.com/challenge/r6TSNwkLZ2DgsoKiH

function oddishOrEvenish(num) {
    return [...String(num)].reduce((acc, el) => parseInt(acc) + parseInt(el), 0) % 2 == 0 ? "Evenish" : "Oddish"
}