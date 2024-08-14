:::::::::::::::::::::::================Untuk Menjalankan Tailwind===============:::::::::::::::::::::::

sebelum memulai kode, pertama yang harus dilakukan adalah Menjalankan script Tailwind agar class Tailwind bisa dipakai.
caranya:

 -buka terminal: jika menggunakan VScode (visual studio code) bisa dengan shortcut ctrl + `

 -setelah didalam terminal jalankan kode "npm run tailwind" (memerlukan node js)
    ::opsional::
        |-> jika ingin mengecek scriptnya bisa dilihat di file package.json di bagian:
            |->
                "scripts": {
                    "tailwind": "tailwindcss -i ./src/input.css -o ./src/output.css --watch"
                },

 -tailwind siap digunakan

:::::::::::::::::::::::================Untuk mMengganti Gambar===============:::::::::::::::::::::::

 -jika menggunakan background image bisa mengganti di class "bg-[url('../img/nama-gambar.jpg')]"
  ::penjelasan::
    |-> bg = kode untuk background, jika menggunakan "[url('')]" itu artinya menggunakan background image
        "../" = keluar satu langkah dari file.
            |-> contohnya: saya memiliki sebuah folder css lalu saya memiliki folder img diluar folder css, jika ingin membuat background image dengan tailwind maka dia harus mengambilnya dari file css jadi dari folder css dia akan keluar satu folder menggunakan "../" lalu pergi mengambil gambarnya di folder img dengan kode "../img/".

 -jika menggunakan sintaks <img src="" alt="">: tidak perlu lagi menggunakan "../" karena dia langsung dari index.html, jadi penulisannya seperti ini <img src="img/nama-gambar.jpg" alt="">

