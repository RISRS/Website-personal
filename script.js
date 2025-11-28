//------------------------------------------------
// THEME TOGGLE (DARK / LIGHT MODE)
//------------------------------------------------

const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Simpan tema ke LocalStorage
toggleButton.addEventListener('click', () => {

    body.classList.toggle('light');

    if (body.classList.contains('light')) {
        localStorage.setItem("theme", "light");
        toggleButton.innerHTML = `<i class="fas fa-sun"></i>`;
    } else {
        localStorage.setItem("theme", "dark");
        toggleButton.innerHTML = `<i class="fas fa-moon"></i>`;
    }
});

// Saat halaman dibuka, cek tema tersimpan
window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        body.classList.add("light");
        toggleButton.innerHTML = `<i class="fas fa-sun"></i>`;
    }
};

//------------------------------------------------
//  IMAGE MODAL (KALAU NANTI DIPAKAI)
//------------------------------------------------

function openModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}


// Smooth Fade on Scroll
const faders = document.querySelectorAll('.fade-in');

function fadeOnScroll() {
    const trigger = window.innerHeight * 0.9;

    faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < trigger) {
            el.classList.add("show");
        }
    });
}

window.addEventListener('scroll', fadeOnScroll);
fadeOnScroll();


// Membuka foto agar muncul besar
function openPhoto(src) {
    document.getElementById("photo-modal").style.display = "flex";
    document.getElementById("modal-image").src = src;
}

// Menutup foto besar
function closePhoto() {
    document.getElementById("photo-modal").style.display = "none";
}
