// Integer in Range?
// https://edabit.com/challenge/YT2kXSMEtACPPk35R

function intWithinBounds(n, lower, upper) {
    return Number.isInteger(n) ? n >= lower && n < upper : false
}