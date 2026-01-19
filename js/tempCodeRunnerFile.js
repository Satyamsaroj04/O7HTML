let Number=[1,2,3,4,5,6,7,8,,9,10]
let prime=Number;
console.log("print odd number")
for(let i=0;i<Number.length;i++){
    if(Number[i]%2==1){
console.log(Number[i])
    }
    }
console.log("\nprint even number")
for(let i=0;i<Number.length;i++){
    if(Number[i]%2==0){
console.log(Number[i])
    }
    }
    console.log("\nprint prime number")
for(let i=0;i<prime.length;i++){
    if(prime[i]==2 || prime[i]==3 || prime[i]==5 || prime[i]==7){
console.log(prime[i])
    } }
