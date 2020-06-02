// Matchstick Houses
// https://edabit.com/challenge/tYHkTdFrEmWfxpPKF

function matchHouses(step) {
    return step === 0 ? 0 : step * 6 - step + 1;
}