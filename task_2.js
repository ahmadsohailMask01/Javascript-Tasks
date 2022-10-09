// Name: Muhammad Ahmad Sohail  Roll No. PIAIC202480
// This program is doing uppercase or lowercase a word

var a = "Ahmad";

let b = a.toUpperCase();
let c = a.toLowerCase();
let d = toTiltleCase(a);

console.log("The person's name is: ",a);
console.log("The Uppercase, LowerCase and TitleCase are: ", b, c, d);

function toTiltleCase(a)
{
    return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
}