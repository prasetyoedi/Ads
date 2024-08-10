$(document).ready(function () {
    $(".owl-carousel.varian-pertama").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        center: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        },
        autoplaySpeed: 4000,
    });

    $(".owl-carousel.varian-kedua").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        center: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        },
        autoplaySpeed: 4000,
    });
});

function changeColor() {
    var icon = document.getElementById("myIcon");
    var iconPath = document.getElementById("iconPath");
    if (!icon.classList.contains("clicked")) {
        icon.classList.add("clicked");
        iconPath.setAttribute("fill", "#4AB273");
    } else {
        icon.classList.remove("clicked");
        iconPath.setAttribute("fill", "rgba(0, 0, 0, 0.20);");
    }
}

const progressBar = document.getElementById('progress');
progressBar.style.width = '100%';

function resetProgressBar() {
    const progressBar = document.getElementById('progress');

    // Set lebar menjadi 0 tanpa transisi
    progressBar.style.transition = 'width 0s';
    progressBar.style.width = '0px';

    // Menerapkan transisi kembali ke 100% pada frame selanjutnya
    requestAnimationFrame(() => {
        progressBar.style.transition = 'width 30s linear';
        progressBar.style.width = '100%';
    });
}

