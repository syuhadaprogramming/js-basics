// function keluarga
function keluarga(suami, istri, anak) {
  return {
    // if key and value sama maka bisa ditulis satu properti saja
    suami,
    istri,
    anak,
    nikah() {
      console.log(`Hasil pernikahan ${suami} dan ${istri} adalah ${anak}`);
    },
    statusMenikah: true,
  };
}

// define
let keluargaSatu = keluarga("Syuhada", "Desi", "Hamzah Syuhada");
let keluargaDua = keluarga("Mista", "Sani", "Encih,Syuhada,Yati,Yuli,Adung");

// cetak
console.log(keluargaSatu);
console.log(keluargaSatu.nikah());

console.log(keluargaDua);
console.log(keluargaDua.nikah());
