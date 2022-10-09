// Name: Muhammad Ahmad Sohail  Roll No. PIAIC202480
// This program is printing friends' names in a loop

var arr = ['Hammad,','Aziz,','Saim,'];

for (let i=0; i<arr.length; i++){
console.log("Hi",arr[i],"I am gladly inviting you to join me on 09/10/2022 as I plan to arrange a delicious dinner party.");
}

console.log(arr[0],"is not coming to the dinner party!");
console.log("So, I have to arrange another guest for the dinner party.");

let ar = arr[0].replace("Talha");

arr[0] = ar;

for (let i=0; i<arr.length; i++){
console.log("Hi",arr[i],"I am gladly inviting you to join me on 09/10/2022 as I plan to arrange a delicious dinner party.");
}