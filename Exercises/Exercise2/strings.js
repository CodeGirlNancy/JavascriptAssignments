// String substring(start, end)
let str = "Adokorac Nancy";
let substr = str.substring(6, 10); 
console.log(substr )

// String substr(start, length)
let subst = str.substr(6, 7); 
console.log(subst )

// String replace()
let replacedStr = str.replace("Jazmine", "Ellah"); // Returns "Adokorac Ellah"
console.log(replacedStr )

// String replaceAll()
let replacedAllStr = str.replaceAll("n", "a"); 
console.log(replacedAllStr)

// String toUpperCase()
let upperCaseStr = str.toUpperCase(); // Returns "ADOKORAC NANCY"
console.log(upperCaseStr )

// String toLowerCase()
let lowerCaseStr = str.toLowerCase(); // Returns "jazine ellah"
console.log(lowerCaseStr )

// String concat()
let newStr = str.concat(" ", "My Beloved Baby"); // Returns "jazmine Ellah My Beloved Baby"
console.log(newStr )

// String trim()
let trimmedStr = "  Jazmine  Ellah ".trim(); // Returns "Jazmine Ellah"
console.log(trimmedStr )

// String trimStart()
let trimmedStartStr = "  Jazmine Ellah".trimStart(); // Returns "Jazmine Ellah"
console.log(trimmedStartStr )

// String trimEnd()
let trimmedEndStr = "Jazmine Ellah ".trimEnd(); // Returns "Jazmine Ellah"
console.log(trimmedEndStr)

// String padStart()
let paddedStartStr = "7".padStart(3, "0"); // Returns "007"
console.log(paddedStartStr )

// String padEnd()
let paddedEndStr = "7".padEnd(3, "0"); // Returns "500"
console.log(paddedEndStr )

// String charAt()
let char = str.charAt(0); // Returns "E"
console.log(char )

// String charCodeAt()
let charCode = str.charCodeAt(0); // Returns the Unicode value of "E"
console.log(charCode)

// String split()
let splittedStr = str.split(" "); // Returns ["Ellah", "Jazmine"]
console.log(splittedStr )