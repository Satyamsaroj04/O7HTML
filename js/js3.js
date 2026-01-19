
console.log("program first")
let course= "mean"
if(course==="mern"){
    console.log("Welcome to MERN")
} else if(course==="php"){
    console.log("Welcome to PHP")
}   else if(course==="mean"){
    console.log("Welcome to MEAN")
}  else{
    console.log("Invalid Course")
}

console.log("\n Second program\n")
let x=4
let y=7
let z=2
if(x>y && x>z && y>z){
    if(x>y){
        console.log(x+" is the greatest number")
    } else{
        console.log(z+" is the greatest number")
    }
} else{
    console.log(y+" is the greatest number")
}

console.log("\n Third program\n")
let signal=1
switch(signal){
    case 1 :
        console.log("Stop-Red")
        break
    case 2:
        console.log("Wait-Yellow")
        break
    case 3:
        console.log("Go-Green")
        break
    default:
        console.log("Invalid Signal")
}