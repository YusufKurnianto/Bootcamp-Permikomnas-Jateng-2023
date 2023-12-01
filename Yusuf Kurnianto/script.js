function ubahnama1() {
    let ubahnama1 ="ubahnama1";
    document.getElementById("judul1").innerHTML="<h1>Hallo, Nama Saya Yusuf Kurnianto</h1>";
    document.getElementById("info1").innerHTML="<p>Saat ini, saya merupakan mahasiswa semester 5 yang sedang menempuh studi di Universitas Muhammadiyah Purworejo. Website saya buat dalam waktu 3 hari kurang lebih, dengan tujuan untuk mengasah kemampuan dalam mengikuti Event Bootcamp Permikomnas Jateng 2023, menunjukkan dedikasi dalam meningkatkan keterampilan dan berpartisipasi aktif dalam kegiatan akademik serta pengembangan diri.</p>";
    document.getElementById("judul2").innerHTML="<h1>Keahlian Saya</h1>";
    document.getElementById("info2").innerHTML="<p>Saat ini saya adalah seorang konten kreator yang berpengalaman dengan lebih dari 4 tahun di dunia youtube.Saya memiliki berbagai keahlian, antara lain seperti, membuat logo, brosur, editing foto, editing video, fotografi, komputer, jaringan, handphone, peogram, pembuatan iklan, promosi, jasa meningkatkan followers, like, dll di semua medsos, membuat desain ui/ux aplikasi, membuat aplikasi mobile, dan desain web. Saya juga memiliki pengalaman dalam mengelola proyek dan bekerja sama dengan klien untuk mencapai tujuan mereka. Saya sangat tertarik dengan desain yang minimalis dan modern, dan selalu berusaha untuk menciptakan desain yang menarik dan fungsional. Saya berkomitmen untuk selalu berusaha untuk memberikan hasil terbaik bagi klien saya dengan desain yang kreatif dan fungsional.</p>";
}

function ubahnama2() {
    let ubahnama2 ="ubahnama2";
    document.getElementById("judul1").innerHTML="<h1>Di media sosial, Saya Di panggil Bang Nihon</h1>";
    document.getElementById("info1").innerHTML="<p>Karena saya memiliki youtube bernama Nihon No'anime Official</p>";
    document.getElementById("judul2").innerHTML="<h1>Konten Youtube</h1>";
    document.getElementById("info2").innerHTML="<p>Di Channel YouTube Nihon Noanime Official, saya aktif membagikan berbagai konten tutorial, game, dan materi terkait editing. Perjalanan saya dalam dunia konten YouTube ini dimulai sejak tahun 2019 dan terus berlanjut hingga saat ini. Proses pembuatan konten membutuhkan konsistensi dan semangat yang tinggi, karena hanya dengan dedikasi yang kuat, saya dapat menciptakan konten yang bermanfaat dan menarik bagi para pengunjung channel. Dalam menjalankan channel ini, saya tidak hanya berfokus pada satu jenis konten, melainkan berusaha menyajikan variasi topik agar penonton memiliki banyak pilihan dan dapat merasakan pengalaman yang beragam. Konsistensi dan semangat yang saya tanamkan menjadi kunci utama dalam membangun channel ini, karena itulah yang memotivasi saya untuk terus memberikan konten yang berkualitas dan memberikan nilai tambah bagi para penonton setia channel ini.</p>";
}

function ubahWarnahijau() {
    let ubahWarnahijau ="ubahWarnahijau";
    document.body.style.backgroundColor = "rgb(170, 255, 0)";
}

function ubahWarnaputih() {
    let ubahWarnaputih ="ubahWarnaputih";
    document.body.style.backgroundColor = "white";
}

/*
    document.getElementById("heading").innerHTML="hallo js";
    document.getElementById("Judul").innerHTML="hallo js";
*/
const cursor = document.createElement("div"); /* Membuat elemen div untuk cursor */
cursor.className = "cursor"; /* Memberikan kelas cursor untuk div */
document.body.appendChild(cursor); /* Menambahkan div ke dalam body */

const follower = document.createElement("div"); /* Membuat elemen div untuk follower */
follower.className = "follower"; /* Memberikan kelas follower untuk div */
document.body.appendChild(follower); /* Menambahkan div ke dalam body */

document.addEventListener("mousemove", function(e) { /* Menambahkan event listener untuk mousemove */
    let cursorLeft = e.pageX + "px";
    let cursorTop = e.pageY + "px";
    let followerLeft = cursor.offsetLeft + 3 + "px";
    let followerTop = cursor.offsetTop + 3 + "px";

    cursor.style.left = cursorLeft;
    cursor.style.top = cursorTop;
    follower.style.left = followerLeft;
    follower.style.top = followerTop;
});
