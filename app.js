let date = new Date();

let namaHari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"]
let namaBulan= ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]
let hari= date.getDay();
let bulan= date.getMonth();
let tanggal= date.getDate();
let tahun= date.getFullYear();

let tanggalsekarang = namaHari[hari] + ", " +tanggal+ " " +namaBulan[bulan]+" "+tahun

document.getElementById("tanggal").innerHTML = tanggalsekarang

function checkWaktu()
{
    let date = new Date
    let jam = date.getHours();
    let menit = date.getMinutes();    

    let waktu = jam + ":" + menit
    document.getElementById("jam").innerHTML = waktu
}
setInterval(checkWaktu, 1000)

let tg = Date()
console.log(tg)