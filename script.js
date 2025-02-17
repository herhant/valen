document.addEventListener("DOMContentLoaded", () => {
    const enlaces = document.querySelectorAll("nav a");
    const secciones = document.querySelectorAll(".seccion");

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", (e) => {
            e.preventDefault();
            const target = e.target.getAttribute("data-target");

            secciones.forEach(sec => {
                if (sec.id === target) {
                    sec.classList.add("activa");
                } else {
                    sec.classList.remove("activa");
                }
            });
        });
    });
});
