document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama");
  const email = document.getElementById("email");
  const jam = document.getElementById("jam-keberangkatan");
  const tujuan = document.getElementById("tujuan");
  const tiket = document.getElementById("jumlah-tiket");

  const errNama = document.getElementById("err-nama");
  const errEmail = document.getElementById("err-email");
  const errJam = document.getElementById("err-jam");
  const errTujuan = document.getElementById("err-tujuan");
  const errTiket = document.getElementById("err-tiket");

  let valid = true;

  [nama, email, jam, tujuan, tiket].forEach((el) =>
    el.classList.remove("invalid")
  );
  [errNama, errEmail, errJam, errTujuan, errTiket].forEach(
    (err) => (err.textContent = "")
  );

  if (nama.value.trim() === "") {
    errNama.textContent = "Nama wajib diisi";
    nama.classList.add("invalid");
    valid = false;
  } else if (nama.value.length > 30) {
    errNama.textContent = "Maksimal 30 karakter";
    nama.classList.add("invalid");
    valid = false;
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email.value)) {
    errEmail.textContent = "Email tidak valid";
    email.classList.add("invalid");
    valid = false;
  }

  if (jam.value === "") {
    errJam.textContent = "Jam wajib diisi";
    jam.classList.add("invalid");
    valid = false;
  }

  if (tujuan.value.trim() === "") {
    errTujuan.textContent = "Tujuan wajib diisi";
    tujuan.classList.add("invalid");
    valid = false;
  }

  const t = Number(tiket.value);
  if (isNaN(t) || t < 1 || t > 10) {
    errTiket.textContent = "Jumlah tiket 1–10";
    tiket.classList.add("invalid");
    valid = false;
  }

  if (valid) {
    const result = document.getElementById("result");

    result.style.display = "block";
    result.innerHTML = `
    <strong>Data:</strong><br>
    Nama: ${nama.value}<br>
    Email: ${email.value}<br>
    Jam: ${jam.value}<br>
    Tujuan: ${tujuan.value}<br>
    Jumlah Tiket: ${tiket.value}
  `;
  }
});
