function isPalindrome(x) {
    return x.split('').reverse().join('').toLowerCase() != x.toLowerCase() ? false : true;
}


console.log(isPalindrome('Abba'))