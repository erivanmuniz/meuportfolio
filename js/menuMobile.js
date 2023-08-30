const buttonMenu = document.querySelector('.button__menu')



const menuMobile = document.querySelector('.menuMobile')
let isMenuOpen = false // perguntando se está aberto
// se false - fechado , se true - aberto


buttonMenu.addEventListener('click', function () {
    isMenuOpen ?  menuMobile.classList.add('invisivel') :  
    menuMobile.classList.remove('invisivel')


    isMenuOpen ? buttonMenu.children[0].setAttribute('src', '../assets/icons/menu.svg') :
    buttonMenu.children[0].setAttribute('src', '../assets/icons/close.svg')
    




    isMenuOpen = !isMenuOpen
    console.log(isMenuOpen)
})

