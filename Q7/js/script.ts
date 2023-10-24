const addBtn = <HTMLButtonElement>document.getElementById("btn-add");
const filterBtn = <HTMLButtonElement>document.getElementById("btn-filter");
const laptopSelect = <HTMLSelectElement>document.getElementById("model");
const processorSelect = <HTMLSelectElement>document.getElementById("processor");
const ramSelect = <HTMLSelectElement>document.getElementById("ram");
const hardSelect = <HTMLSelectElement>document.getElementById("hard");
const asusPro = <HTMLDivElement>document.getElementById("asus");
const acerPro = <HTMLDivElement>document.getElementById("acer");
const macbookPro = <HTMLDivElement>document.getElementById("macbook");
const lenovoPro = <HTMLDivElement>document.getElementById("lenovo");
let removeBtns = document.querySelectorAll(".remove");
let count: number = 0;
addBtn.addEventListener("click", () => {
  count++;

  switch (count) {
    case 1:
      asusPro.style.display = "flex";
      break;
    case 2:
      acerPro.style.display = "flex";
      break;
    case 3:
      lenovoPro.style.display = "flex";
      break;
    case 4:
      macbookPro.style.display = "flex";
      break;
  }
});
removeBtns.forEach((removeBtn) => {
  removeBtn.addEventListener("click", (event) => {
    // const myEvent:Event=event
    // myEvent.target?.parentElement?.remove()
    console.log(event);
    (event.target as Element)?.parentElement?.remove();
  });
});
filterBtn.addEventListener("click", () => {});
const asusObj: {} = {
  model: "asus",
  processor: "core i7",
  ram: "6GB",
  SelecthardDisk: "512GB",
};
const acerObj: {} = {
  model: "acer",
  processor: "core i3",
  ram: "2GB",
  SelecthardDisk: "128GB",
};
const lenovoObj: {} = {
  model: "lenovo",
  processor: "core i5",
  ram: "8GB",
  SelecthardDisk: "1TB",
};
const macObj: {} = {
  model: "macbook",
  processor: "M1",
  ram: "2GB",
  SelecthardDisk: "256GB",
};
