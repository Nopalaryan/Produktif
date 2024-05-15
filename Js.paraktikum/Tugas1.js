//if else biasa//

const usia = 16;
if (usia >= 17) {
    console.log("Anda sudah dewasa.");
} else {
    console.log("Anda masih di bawah umur.");
}

const suhu = 16;
if (suhu < 20) {
    console.log("Suhu terlalu dingin.");
} else if (suhu >= 20 && suhu <= 25) {
    console.log("Suhu nyaman.");
} else {
    console.log("Suhu terlalu panas.");
}

const bilangan = 7;
if (bilangan % 2 === 0) {
    console.log("bilangan genap.");
} else {
    console.log("bilangan ganjil.");
}

const jam_tidur = 21_00;
if (jam_tidur >= 20_00) {
    console.log("selamat malam.");
} else {
    console.log("waktunya anda tidur.");
}

const nilai = 80
if (nilai <75){
    console.log("nilai pas.");
} else if (nilai>=80 && nilai <=70){
    console.log("nilai rendah");
} else {
   console.log("nilai tinggi");
}

//if else ternary//
var x = 15;
var ucapan;
if(x===15){
    ucapan="sama dengan"
} else if(x > 15){
    ucapan="lebih besar"
} else{
    ucapan="lebih kecil"
}
console.log(ucapan)

var no =11 ;
var operator = no === 11 ?"lebih sama":
no>11?"lebih besar":
no<11?"lebih kecil":
"gak tau"
console.log(operator)

var inivar= 7;
var date = new Date().getHours;
date>=inivar? console.log("sudah masuk")
:console.log("sudah selesai");

var umur = 17;
var status = (umur >= 18) ? 
             ((umur < 21) ? "Dewasa Muda" : "Dewasa") : 
             "Remaja atau dibawahnya";
console.log(status);

//kondisi cuaca
var hujan = false;
var temperatur = 30;
var weatherStatus = (hujan) ? 
                    ((temperatur < 22) ? "Hujan dan dingin" : "Hujan tapi hangat") :
                    ((temperatur < 28) ? "Tidak hujan dan sejuk" : "Tidak hujan dan panas");
console.log(weatherStatus);


//nilai//
var i= 46;//variabel yang ingin dimasukkan//
const ternarywithif = i > 80 ? "Lulus" : i < 65? "Remidi": "Tidak Lulus";//?=kemungkinan pertama(if),:=if else, : terakhir=else//
//menampilkan
console.log(ternarywithif)

//suhu//
var x= 21;
const celsius = x > 25 ? "Panas" : x > 20? "Normal": "Dingin";
console.log(celsius)

//usia//
var y= 61;
const lama = i > 60 ? "Lansia" : i > 20? "Dewasa": "Anak-anak";
console.log(lama)

//tinggi badan//
var z= 167;
const pendek = z > 165 ? "Tinggi" : z > 150? "Normal": "Pendek";
console.log(pendek)

//berat badan//
var r= 40;
const ringan = r > 80 ? "Obesitas"  : r > 45? "Normal": "Kurang Gizi";
console.log(ringan)