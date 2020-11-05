// create an address object
const address = {
  street: "Pacing",
  city: "Lampung",
  zipCode: 43232,
};

// create function to display address
function showAddress(address) {
  for (const key in address) {
    console.log(`${key}: ${address[key]}`);
  }
}

// call and declare the function to be alamatSatu
const alamatSatu = showAddress(address);

// print alamatSatu
console.log(alamatSatu);
