// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navmenu");

hamburger.addEventListener("click", function (e) {
  e.preventDefault(); //agar tidak reload keatas

  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.add("hidden"); // pastikan menu ketutup
    hamburger.classList.remove("hamburger-active"); // reset tombol hamburger
  }
});

//navbar-fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Ganti dengan Public Key dari dashboard EmailJS
emailjs.init("JnuKQ_GbnPnrLNCml");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah reload halaman

    emailjs.sendForm("service_fnawb4l", "template_5kpocfc", this).then(
      function () {
        alert("Pesan berhasil dikirim!");
        form.reset(); // Kosongkan form setelah kirim
      },
      function (error) {
        alert("Gagal mengirim pesan: " + error.text);
      }
    );
  });
});
