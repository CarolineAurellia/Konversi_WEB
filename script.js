function showTab(event, tabName) {
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.add('hidden'));

    document.getElementById(tabName).classList.remove('hidden');

    let buttons = document.querySelectorAll('.nav button');
    buttons.forEach(btn => btn.classList.remove('active'));

    event.target.classList.add('active');
}

/* ================= PANJANG ================= */
function convertPanjang() {
    let value = parseFloat(document.getElementById("panjangValue").value);
    let from = document.getElementById("panjangFrom").value;
    let to = document.getElementById("panjangTo").value;
    let resultBox = document.getElementById("panjangResult");

    if (isNaN(value)) {
        resultBox.innerText = "Masukkan angka dulu!";
        return;
    }

    // ubah ke meter dulu
    let meter;
    if (from === "km") meter = value * 1000;
    if (from === "m") meter = value;
    if (from === "cm") meter = value / 100;
    if (from === "mm") meter = value / 1000;

    let result;
    if (to === "km") result = meter / 1000;
    if (to === "m") result = meter;
    if (to === "cm") result = meter * 100;
    if (to === "mm") result = meter * 1000;

    resultBox.innerText = "Hasil: " + result;
}

/* ================= BERAT ================= */
function convertBerat() {
    let value = parseFloat(document.getElementById("beratValue").value);
    let from = document.getElementById("beratFrom").value;
    let to = document.getElementById("beratTo").value;
    let resultBox = document.getElementById("beratResult");

    if (isNaN(value)) {
        resultBox.innerText = "Masukkan angka dulu!";
        return;
    }

    // ubah ke kg dulu
    let kg;
    if (from === "ton") kg = value * 1000;
    if (from === "kg") kg = value;
    if (from === "g") kg = value / 1000;

    let result;
    if (to === "ton") result = kg / 1000;
    if (to === "kg") result = kg;
    if (to === "g") result = kg * 1000;

    resultBox.innerText = "Hasil: " + result;
}

/* ================= TEMPERATUR ================= */
function convertTemp() {
    let value = parseFloat(document.getElementById("tempValue").value);
    let from = document.getElementById("tempFrom").value;
    let to = document.getElementById("tempTo").value;
    let resultBox = document.getElementById("tempResult");

    if (isNaN(value)) {
        resultBox.innerText = "Masukkan angka dulu!";
        return;
    }

    let celsius;

    if (from === "c") celsius = value;
    if (from === "f") celsius = (value - 32) * 5/9;
    if (from === "k") celsius = value - 273.15;
    if (from === "r") celsius = value * 5/4;

    let result;
    if (to === "c") result = celsius;
    if (to === "f") result = (celsius * 9/5) + 32;
    if (to === "k") result = celsius + 273.15;
    if (to === "r") result = celsius * 4/5;

    resultBox.innerText = "Hasil: " + result.toFixed(2);
}