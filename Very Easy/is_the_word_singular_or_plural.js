// Is the Word Singular or Plural?
// https://edabit.com/challenge/5vAX6Lw2Yrgdkx7Qi

function isPlural(word) {
    return word.charAt(word.length - 1) === 's' ? true : false;
}