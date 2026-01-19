console.log("👉 Task: add and remove item from beginner")
let cities = ["Delhi", "Mumbai", "Chennai", "Kolkata"];
console.log(cities)
cities.push("Pune")
cities.shift()
console.log(cities)
console.log("\nTask 2 👉 : Use splice to Replace Items (Intermediate)")
let languages = ["HTML", "CSS", "JavaScript", "Python", "Java"];
console.log("without replace",languages)
languages.splice(3,2,"C++","GO")
console.log("after replace " ,languages)
