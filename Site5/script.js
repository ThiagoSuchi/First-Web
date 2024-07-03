window.addEventListener("scroll", function(){
    let header = document.querySelector('#menu')
    header.classList.toggle('rolagem', window.scrollY > 90)
})