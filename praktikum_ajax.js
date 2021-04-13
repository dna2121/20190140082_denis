/**
 * AJAX
 * AJAX = Asynchronus javascript and xml
 * 
 * ajax adalah teknik yang digunakan untuk membuat website yang dinamis
 * artinyaaaa, website mampu mengupdate dan menampilkan data baru
 * dari server tanpa perlu melakukan reload.
 * 
 * praktikum kli ini pake ajax jquery
 */

// fungsi ajax jquery untuk meload isi file
$(function () {
    $("#nama").load("test.txt");
});

/**
 * berikut merupakan fungsi untuk fetch data dari internet menggunakan ajax jquery
 * kita akan menggnakan .... sbgi urlnya
 * silakan dibuka dulu biar paham ya denis
 */
$(function () {
    let url = "https://jsonplaceholder.typicode.com/photos";
    //mengambil button untuk fetch data
    
    $("#getPost").on("click", function(){
        //memanggil jquery ajax
        $.ajax({
            //memanggil variable url
            url: url,

            //menggunakan get request
            type: 'GET',

            //jika sukses
            success: function (data) {
                let data_html = '';

                //looping data (ambil one by one)
                $.each(data, function (i, item) {
                    //mengkonversi hasil loop tadi ke html
                    data_html +=
                    '<br>' +
                    '<img src="' + item.thumbnailUrl + '" alt="">' +
                    '<br>' +
                    '<h1>' +item.id + '. ' +item.title  + '</h1>'
                });

                //input hasil loop tadi ke div dengan id datahasildariinternet
                $("#data_hasil_dari_internet").html(data_html);
            },

            //jika error
            error: function (error) {
                //tampil consolelog
                console.log(error);
            }
        })
    })
})