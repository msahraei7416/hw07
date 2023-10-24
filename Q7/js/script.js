var addBtn = document.getElementById("btn-add");
var filterBtn = document.getElementById("btn-filter");
var laptopSelect = document.getElementById("model");
var processorSelect = document.getElementById("processor");
var ramSelect = document.getElementById("ram");
var hardSelect = document.getElementById("hard");
var asusPro = document.getElementById("asus");
var acerPro = document.getElementById("acer");
var macbookPro = document.getElementById("macbook");
var lenovoPro = document.getElementById("lenovo");
var removeBtns = document.querySelectorAll(".remove");
var count = 0;
addBtn.addEventListener("click", function () {
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
removeBtns.forEach(function (removeBtn) {
    removeBtn.addEventListener("click", function (event) {
        var _a, _b;
        // const myEvent:Event=event
        // myEvent.target?.parentElement?.remove()
        console.log(event);
        (_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
    });
});
filterBtn.addEventListener("click", function () { });
var asusObj = {
    model: "asus",
    processor: "core i7",
    ram: "6GB",
    SelecthardDisk: "512GB",
};
var acerObj = {
    model: "acer",
    processor: "core i3",
    ram: "2GB",
    SelecthardDisk: "128GB",
};
var lenovoObj = {
    model: "lenovo",
    processor: "core i5",
    ram: "8GB",
    SelecthardDisk: "1TB",
};
var macObj = {
    model: "macbook",
    processor: "M1",
    ram: "2GB",
    SelecthardDisk: "256GB",
};
