/**
 * kode vanilla javascript(javascript murni) untuk menambahkan value
 * pada elemen html
 */
document.getElementById('nama').innerHTML = 'Nataya';

/**
 * kode jquery untuk menambahkan value
 * pada elemen html
 */
$('#nim').html('20190140082');

/**
 * jquery menggunakan selector sama seperti css
 * . untuk class
 * # untuk id
 * kita dapat menuliskan tag html bila ingin memilih berdasarkan tag
 * misal : <button></button maka tinggal tulis button
 * dalam kode berikut, kita akan menampilkan console.log saat doc readyy
 */
$(function() {
    console.log("Hello");
});

// kode jquery untuk menyembunyikan elemen
$("#hide").on("click", function() {
    $("#nama").hide();
});

// kode jquery untuk menampilkan kembali elemen
$("#show").on("click", function() {
    $("#nama").show();
});

// coba ini :)
$("#toggle").on("click", function() {
    $("#nama").toggle();
});

//kode jquery untuk fade in elemen html
$("#fadeIn").on("click", function(){
    $("#tanggal").fadeIn();
});

// kode jquery untuk fade in elemen html
$("#fadeOut").on("click", function(){
    $("#tanggal").fadeOut();
});

// coba ini
$("#fadeToggle").on("click", function(){
    $("#tanggal").fadeToggle();
});

// kode jquery untuk slide up elemen html
$("#slideUp").on("click", function(){
    $("#img").slideUp();
});

// kode jquery
$("#slideDown").on("click", function(){
    $("#img").slideDown();
});

// coba ini
$("#slideToggle").on("click", function(){
    $("#img").slideToggle();
});