// Menangani klik pada tombol hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Ketika hamburger diklik, toggle kelas "active" pada nav-links
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Optional: Menambahkan class navbar-scrolled ketika halaman digulir
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled'); // Navbar menjadi lebih gelap saat scroll
    } else {
        navbar.classList.remove('navbar-scrolled'); // Navbar kembali transparan
    }
});

