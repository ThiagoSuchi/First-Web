window.addEventListener("scroll", function(){
    let cabecalho = document.querySelector('#menu-scroll')
    cabecalho.classList.toggle('rolagem',window.scrollY > 50)
})