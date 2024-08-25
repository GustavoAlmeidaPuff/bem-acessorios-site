let lastScrollTop = 0;
let header = document.getElementById("header");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll para baixo
        header.style.top = "-120px"; // Ajuste esse valor conforme necessário
    } else {
        // Scroll para cima
        header.style.top = "0";
    }

    lastScrollTop = scrollTop;
});
