//Menampilkan Nama Kelompok Menggunakan Function Map (Pengolahan Array)
const anggota = [
    { nama: "Erlin Sofia"},
    { nama: "Fauzan Zaman"},
    { nama: "Fachrul"},
    { nama: "Muhamad Ikhsan"},
  ];
  
  document.getElementById("textkelompok").innerHTML = anggota.map(getKelompok);
  
  function getKelompok(item) {
    return [item.nama];
  }
  
  //Fungsi Temukan
  function temukan() {

  }
  