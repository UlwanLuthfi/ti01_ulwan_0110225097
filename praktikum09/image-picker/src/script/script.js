fetch("image.json")
  .then((res) => res.json())
  .then((images) => {
    const listImage = document.getElementById("list-image");
    const preview = document.getElementById("image");

    images.forEach((image) => {
      const option = document.createElement("option");

      option.value = `${image.name}.${image.format}`;
      option.textContent = image.name;
      listImage.appendChild(option);
    });

    if (images.length > 0) {
      const first = images[0];
      preview.src = `src/image/${first.name}.${first.format}`;
    }

    listImage.addEventListener("change", () => {
      const nama = listImage.options[listImage.selectedIndex].textContent;
      alert(`Ini gambar ${nama}`);
      preview.src = `src/image/${listImage.value}`;
    });
  });
