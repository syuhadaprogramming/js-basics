// change judul index.html
const judul = document.querySelector("h2");
judul.innerHTML = "Latihan 4 - Demerit Points";

function checkSpeed(speed) {
  // variable
  const speedLimit = 70;
  const kmPerPoints = 5;

  // logic
  if (speed < speedLimit + kmPerPoints) {
    console.log("Ok");
  } else {
    const points = Math.floor((speed - speedLimit) / kmPerPoints);
    if (points >= 12) {
      console.log("License suspended");
    } else {
      console.log("Points : ", points);
    }
  }
}

checkSpeed(129);
