// Factory Function
function address(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

const alamatSatu = address("Pacing Jaya", "Lampung", 34231);
console.log(alamatSatu);

const alamatDua = address("Natar", "Lampung Selatan", 23112);
console.log(alamatDua);

// Constructor function
function Alamat(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const addressOne = new Alamat("Sakayan", "Lampung Barat", 19823);
console.log(addressOne);

const addressTwo = new Alamat("Liwa", "Lampung Barat", 21938);
console.log(addressTwo);
