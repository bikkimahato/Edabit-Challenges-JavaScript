// Promises VI: Catch
// https://edabit.com/challenge/CstPAznqLdPSPYyAC

let errorLog = {}

let promise = new Promise((resolve, reject) => {
    throw new Error('Something failed');
})
    .catch(err => errorLog = err)