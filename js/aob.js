// Given Array
let courses = ["JS", "HTML", "CSS", "React"];

console.log("Original Array:", courses);

// Add "Node" at the end.
courses.push("Node");
console.log("After adding Node:", courses);

// Remove first element
courses.shift();
console.log("After removing first element:", courses);

//  Get only "HTML" and CSS
let selectedCourses = courses.slice(0, 2);
console.log("Only HTML & CSS:", selectedCourses);
console.log("Original array remains same:", courses);

