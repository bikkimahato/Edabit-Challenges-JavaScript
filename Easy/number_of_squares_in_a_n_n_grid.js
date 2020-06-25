// Number of Squares in a n * n Grid
// https://edabit.com/challenge/RGQXN4TG2CQoBAReQ

function numberSquares(n) {
    return n * (n + 1) * (2 * n + 1) / 6
}