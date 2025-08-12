// Popup muncul otomatis setelah 3 detik setelah halaman selesai dimuat
window.addEventListener("load", function() {
  setTimeout(function(){
    // Tampilkan popup dengan mengubah style display jadi 'block'
    document.getElementById("popup").style.display = "block";
  }, 3000);

  // Jalankan efek ketikan pada elemen dengan id "typing"
  typeEffect();
});

// Tutup popup saat tombol close (×) diklik
document.querySelector(".close").onclick = function() {
  document.getElementById("popup").style.display = "none";
};

// Animasi fade-in saat scroll ke elemen dengan class 'fade-in'
const fadeElements = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    // Jika posisi elemen sudah masuk ke viewport (100px dari bawah layar)
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show'); // Tambahkan class 'show' untuk trigger animasi CSS
    }
  });
});

// Menangani submit form kontak
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Mencegah reload halaman setelah submit
  alert("Pesan Anda berhasil dikirim!"); // Tampilkan notifikasi
});

// Efek ketikan teks pada elemen dengan id "typing"
const text = "Bangun Website & Aplikasi Impianmu 🚀";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    // Tambahkan satu karakter per panggilan fungsi
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    // Panggil ulang fungsi setelah 100ms untuk karakter berikutnya
    setTimeout(typeEffect, 100);
  }
}

// Toggle hamburger menu saat tombol menu diklik
document.getElementById("menu-toggle").addEventListener("click", function() {
  document.querySelector("nav ul").classList.toggle("show");
});

// Saat halaman dimuat, scroll ke posisi paling atas dan tampilkan alert selamat datang
window.onload = function() {
  window.scrollTo(0, 0);
  alert("Selamat Datang!, jika anda ingin memesan anda dapat mengubungi whatsapp di bagian kontak Terimakasih.");
};
