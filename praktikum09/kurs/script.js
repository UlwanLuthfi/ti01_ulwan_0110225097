const inputValas = document.getElementById("valas");
const inputRupiah = document.getElementById("rupiah");
const kurs = {
  usd: 9.915,
  sgd: 13.472,
  rm: 874,
  jpy: 120,
  eur: 15.888,
  sar: 3.592,
};

function hitungKurs() {
  const nilai = document.getElementById("nilai").value;
  const valas = inputValas.value;
  const rupiah = nilai * kurs[valas];

  inputRupiah.value = rupiah;
}

inputValas.addEventListener("change", hitungKurs);
