// change judul index.html
const judul = document.querySelector("h2");
judul.innerHTML = "Latihan 5 - Even and Odd Numbers";

function showNumber(number) {
  for (let i = 0; i < number; i++) {
    if (i % 2 == 0) {
      console.log(i, "Even");
    } else {
      console.log(i, "Odd");
    }
  }
}

showNumber(13);

const date1 = new Date(2018, 5, 15, 06, 50, 00, 00);

