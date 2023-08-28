function add7 (num) {
    return num + 7;
}

let multiply = function (num1, num2) {
    return num1 * num2;
}

function capitalize (str) {
    return str.replace(str[0], str[0].toUpperCase());
}

let lastLetter = str => str.slice(-1); // equivalent to str.charAt(str.length - 1)

console.log(add7(1));
console.log(multiply(3, 4));
console.log(capitalize("thIS"));
console.log(lastLetter("abcd"));