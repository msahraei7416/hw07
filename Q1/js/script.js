const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
function topSalary(obj) {
  let maxSalary = 0;
  let maxName;

  for (const [name, salary] of Object.entries(obj)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}
console.log(topSalary(salaries));
