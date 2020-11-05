// Constructor Functions
function Keluarga(suami, istri, anak) {
    this.suami = suami;
    this.istri = istri;
    this.anak = anak;
    this.nikah = function() {
      console.log(`Hasil pernikahan ${suami} dan ${istri} adalah ${anak}`);
    }
    this.statusMenikah = true;
};

// define
let keluargaSatu = new Keluarga("Syuhada", "Desi", "Hamzah Syuhada");
let keluargaDua = new Keluarga("Mista", "Sani", "Encih,Syuhada,Yati,Yuli,Adung");

// cetak
console.log(keluargaSatu);
console.log(keluargaSatu.nikah());

console.log(keluargaDua);
console.log(keluargaDua.nikah());
