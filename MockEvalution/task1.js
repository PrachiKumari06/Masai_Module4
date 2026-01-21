const students = [
{ id: 1, name: "Aarav", marks: 85, subject: "Math", passed: true },
{ id: 2, name: "Diya", marks: 72, subject: "Science", passed: true },
 { id: 3, name: "Rohan", marks: 48, subject: "Math", passed: false }, 
 { id: 4, name: "Sneha", marks: 91, subject: "English", passed: true }, 
 {id: 5, name:"Karan", marks: 66, subject: "Science", passed: true }, 
 { id: 6, name: "Meera", marks: 39, subject: "Math", passed: false }
]
let total_marks=students.map(s=>s.marks).reduce((a,b)=> {return a+b},0)
console.log("Total marks "+total_marks);
let count_passed=students.map(s=>s.passed).reduce((a,b)=>b?a+1: a,0 );
let count_failed=students.length-count_passed;
console.log("Passes Student "+ count_passed)
console.log("Failed Student "+ count_failed)