window.onload = function(){
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const logoImage = document.querySelector(".logo_details img.logo_details");

    // Abre el sidebar al cargar la página
    sidebar.classList.add("open");

    // Ajusta la imagen del favicon al abrir el sidebar
    logoImage.style.display = "block";

    closeBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open");
        menuBtnChange();

        // Ajusta la imagen del favicon al abrir o cerrar el sidebar
        if (!sidebar.classList.contains("open")) {
            logoImage.style.display = "none";
        } else {
            logoImage.style.display = "block";
        }
    });

    // El resto del código permanece igual
    searchBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open");
        menuBtnChange();
    });

    function menuBtnChange(){
        if(sidebar.classList.contains("open")){
            closeBtn.classList.replace("bx-menu","bx-menu-alt-right");
        }else{
            closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
        }
    }
}
