const burgir = document.querySelector(".burgir__menu") 
const header = document.querySelector(".header__nav")
burgir.addEventListener("click", () =>{
    burgir.classList.toggle("open");
    header.classList.toggle("show");
})
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
  });







// const = declare variables
// document = whole project
//.addEventListener = action
