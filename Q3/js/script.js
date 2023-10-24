const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
const aclean = (array) => {
  const a = arr.map((i) => i.toLowerCase().split("").sort().join(""));
  const set = new Set(a);
  // console.log(set);
  return [...set].map((b) => arr[a.indexOf(b)]);
};

console.log(aclean(arr));
