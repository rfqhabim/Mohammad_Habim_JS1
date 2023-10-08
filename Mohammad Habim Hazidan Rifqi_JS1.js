// /*Program if*/  
// let nilai = 80;
// if (nilai >= 60) {
//   console.log('Selamat, Anda lulus!');
// } else {
//   console.log("Maaf, Anda tidak lulus.");
// }


// /*Else*/
// let nilai = 80;
// if (nilai >= 90 && nilai <= 100) {
//   console.log("Nilai kamu A")
// } else if (nilai >= 79 && nilai <= 89) {
//   console.log("Nilai kamu B")
// } else if (nilai >= 69 && nilai <= 79) {
//   console.log("Nilai kamu C")
// } else {
//   console.log("Nilai kamu D")
// }


// /*Nested if*/
// let nilai = 80;
// if (nilai >= 70) {
//   if (nilai <= 80) {
//     keterangan = "Lulus dengan cukup.";
//   } else if(nilai <= 90){
//     keterangan = "Lulus dengan baik.";
//   }  else {
//     keterangan = "Lulus dengan sangat baik.";
//   }
// } else {
//   keterangan = "Belum lulus.";
// }
// console.log(keterangan);


// /*Program Switch Case*/
// let hari = "selasa";
// let aktivitas = "";
// switch (hari) {
//   case "senin":
//     aktivitas = "Hari batik nasional";
//     break;
//   case "selasa":
//     aktivitas = "Pitstop 2 project macro";
//     break;
//   case "rabu":
//     aktivitas = "Materi Javascript control flow part 1";
//     break;
//   case "kamis":
//     aktivitas = "Materi Javasript control flow part 2";
//     break;
//   case "jumat":
//     aktivitas = "Materi function Javascript";
//     break;
//   default:
//     aktivitas = "Adalah hari libur";
// }
// console.log(`Hari ${hari} adalah ${aktivitas}`);


// /*Program For*/
// let x;
// for (x = 1; x <= 5; x++) {
//   console.log('*');
// }


// /*Program While*/
// let n = 10;
// let jumlah = 0;
// let i = 1;
// while (i <= n) {
//   jumlah += i;
//   i++;
// }
// console.log(`Jumlah bilangan bulat positif dari 1 hingga ${n} adalah ${jumlah}`);


// /*Program Do-While*/
// let y = 1;
// do {
//   console.log(y);
//   y++;
// } while (y <= 5);


// /*Program Function*/
// function displaySapa(nama) {
//   console.log(`Halo, ${nama}! Selamat datang.`);
// }
// displaySapa("Habim");
// displaySapa("Jasmine");