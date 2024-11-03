// // Setup You have an array of student objects,
//  where each object contains name and age properties.
//  Task Requirements 1. Sort Students: • Implement a function
//  sortStudentsByCondition (students, conditionFn)
//   that takes an array of student objects (students)
//   and a condition function (conditionFn). •
//   The conditionFn will be used to determine the sorting order.
//    It should accept two student objects (a and b) and return true
//     if a should come before b, and false otherwise.
//     2. Output Format: • Return a new array where students are
//      sorted based on the provided conditionFn.

// // Implement the sortStudentsByCondition function to achieve
//  the task using sort. Ensure the function uses the conditionFn
//   to determine the sorting order of students.

function sortStudentsByCondition(students, conditionFn) {
  return students.sort(function (a, b) {
    return conditionFn(a, b);
  });
}

const students = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 19 },
  { name: "Charlie", age: 23 },
  { name: "David", age: 20 },
];
const sortedStudents = sortStudentsByCondition(
  students,
  (a, b) => b.age - a.age
);
console.log(sortedStudents);
