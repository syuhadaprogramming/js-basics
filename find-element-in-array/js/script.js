const keluargaSyuhada = [
  { id: 1, nama: "Syuhada" },
  { id: 2, nama: "Desi" },
  { id: 3, nama: "Hamzah" },
];

const keluarga = keluargaSyuhada.find((keluarga) => (keluarga.nama = "Hamzah"));

console.log(keluarga);
