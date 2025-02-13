function toggleMenu() {
    var menu = document.getElementById("menuContenido");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("loginModal");
    const btnIngresar = document.getElementById("btnIngresar");
    const closeModal = document.querySelector(".close");
    const loginBtn = document.getElementById("loginBtn");

    // Ocultar modal al inicio
    modal.style.display = "none";

    // Mostrar modal solo cuando se haga clic en "Ingresar"
    btnIngresar.addEventListener("click", (e) => {
        e.preventDefault(); // Evita que el enlace recargue la página
        modal.style.display = "flex";
    });

    // Cerrar modal al hacer clic en la "X"
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Validar usuario y contraseña
    loginBtn.addEventListener("click", () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const errorMsg = document.getElementById("loginError");

        if (username === "admin" && password === "pass12345") {
            alert("¡Inicio de sesión exitoso!");
            modal.style.display = "none";
        } else {
            errorMsg.style.display = "block";
        }
    });

    // Cerrar modal si se hace clic fuera del contenido
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
