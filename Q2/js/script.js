let numbers = [1, 8, 3, [6, 5, 4], [7, 2, 9]];

const sortFromHightoLow = (array) => {
  let flatedArray = array.flat();
  let sortedArrey = flatedArray.sort(function (a, b) {
    return a - b;
  });
  return sortedArrey;
};
let marzi = sortFromHightoLow(numbers);

document.getElementById("num").innerHTML = marzi;
