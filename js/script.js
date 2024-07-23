//toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//ketika menu di click
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan sidebar
const hamburger = document.querySelector('#menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;

        let gambar = parent.querySelector('.card-img-top').src;

        let harga = parent.querySelector('.harga').innerHTML;

        let judul = parent.querySelector('.card-text').innerHTML;

        let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML : '<i>tidak ada informasi yang tersedia</i>'

        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        document.querySelector('.modalTitle').innerHTML = judul;
        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-100');
        document.querySelector('.modalImage').innerHTML = '';
        document.querySelector('.modalImage').appendChild(image);
        document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
        document.querySelector('.modalHarga').innerHTML = harga;

        const nohp = '6285781472422';
        let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=Halo, Saya mau pesan produk ini ${gambar}`;

        document.querySelector('.btnBeli').href = pesan;
    });
});

document.getElementById('selectOption').addEventListener('change', function() {
    var selectedOption = this.value;
    if (selectedOption) {
        window.location.href = selectedOption;
    }
});