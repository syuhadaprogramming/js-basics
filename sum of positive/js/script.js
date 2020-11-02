function positiveSum(array) {
  // Telusuri setiap elemen array
  for (let i = 0; i < array.length; i++) {
    // Buat logic untuk menentukan apakah positive
    if (i > 0) {
      console.log(i);
    }
  }

  // Jumlahkan nilai positive
}

console.log((positiveSum([1, 2, 3, 4, 5]), 15));
console.log((positiveSum([1, -2, 3, 4, 5]), 13));
console.log((positiveSum([-1, -2, -3, -4, -5]), 0));
console.log((positiveSum([-1, 2, 3, 4, -5]), 9));
