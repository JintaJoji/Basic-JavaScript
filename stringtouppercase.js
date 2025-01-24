// string to uppercase
function touppercase(str) {
    return str.toUpperCase(); // Return the uppercase string
}
str = "hello world";
console.log(touppercase(str)); // Call the function and log its returned value


// checks if a given string contains the word "JavaScript"
function checkstring(word, substring) {
    return word.includes(substring); // Pass the substring to check
}

let word = "Learning javascript";
console.log(checkstring(word, "javascript")); // Pass 'javascript' as the second argument


// remove vowels
function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, ''); // Replace all vowels with an empty string
}

let inputString = "Hello World";
console.log(removeVowels(inputString));  // "Hll Wrld"
