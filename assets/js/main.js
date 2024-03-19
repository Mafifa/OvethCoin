//NAV NAVIGATION AND IDIOMAS
const abrir = document.getElementById('abrir'),
    cerrar = document.getElementById('cerrar'),
    nav = document.getElementById('nav'),
    abrirIdiomas = document.getElementById('btnIdiomas'),
    listaDeIdiomas = document.getElementById('nav__idiomas'),
    cerrarIdiomas = document.getElementById('cerrar-idiomas')

//SHOW NAV
if (abrir) {
    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    })
}

//HIDE NAV
if (cerrar) {
    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    })
}

//IDIOMAS LIST
//SHOW IDIOMAS
if (abrirIdiomas) {
    abrirIdiomas.addEventListener("click", () => {
        listaDeIdiomas.classList.add("visible");
        abrirIdiomas.classList.add("novisible");
    })
}

// HIDDEN IDIOMAS
if (cerrarIdiomas) {
    cerrarIdiomas.addEventListener("click", () => {
        listaDeIdiomas.classList.remove("visible");
        abrirIdiomas.classList.remove("novisible");
    })
}

// SWIPER DEL ROADMAP
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//CHART TOKENOMICS
const chartData = {
    labels: ["ICO", "Desarrollo", "Marketing", "Recompensas", "Reserva"],
    data: [60, 42.5, 35, 10, 4.5]
};

const myChart = document.querySelector(".my-chart")

new Chart(myChart, {
    type: "doughnut",
    data: {
        labels: chartData.labels,
        datasets: [
            {
                label: 'Distribution',
                data: chartData.data,
            },
        ],
    },
    options: {
        borderRadius: 2,
        hoverBorderWidth: 0,
        plugins: {
            legend: {
                display: false,
            }
        }
    }

});