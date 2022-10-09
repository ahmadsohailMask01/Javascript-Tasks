// Name: Muhammad Ahmad Sohail  Roll No. PIAIC202480
// This program is printing friends' names in a loop

var arr = ['Toyota Corolla 1996','Kawasaki Ninja R1','Toyota Land Cruiser','Qatar Airways','Emirates','Honda Civic'];

for (let i=0; i<arr.length; i++){
    if(arr[i]=="Toyota Corolla 1996"){
        console.log("I want to own",arr[i]);
    }
    if(arr[i]=="Kawasaki Ninja R1"){
        console.log("I would like to own and race with",arr[i]);
    }
    if(arr[i]=="Toyota Land Cruiser")
    {
        console.log("I want to own and drive",arr[i]);
    }
    if(arr[i]=="Qatar Airways")
    {
        console.log("I would like to travel in",arr[i]);
    }
    if(arr[i]=="Emirates")
    {
        console.log("I want to travel and experience",arr[i]);
    }
    if(arr[i]=="Honda Civic")
    {
        console.log("I want to own and drive and feel the comfort of",arr[i]);
    }
}