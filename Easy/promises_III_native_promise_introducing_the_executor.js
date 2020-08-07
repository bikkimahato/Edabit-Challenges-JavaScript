// Promises III: Native Promise, Introducing the Executor
// https://edabit.com/challenge/8kTQqoWYQXRsKuYEf

let promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("edabit");
    }, 1000);
});