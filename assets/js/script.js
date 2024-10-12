const navbarBtn = document.querySelector(".header .fa-bars-staggered")

const mobileMenyu = document.querySelector(".mobile-menyu")
const closeIcon = document.querySelector(".fa-circle-xmark")

// click dblclick mouseenter mouseleave
// Events DOM
navbarBtn.addEventListener("click", function() {
    mobileMenyu.classList.add("aktiv")
})

closeIcon.addEventListener("click", function() {
    // add remove DOM metodlaridir
    mobileMenyu.classList.remove("aktiv")
})

// bura swiper kodlara gelecek
//sintaksis error

const karusel = new Swiper(".shirketlerKaruseli", {
    slidesPerView: 4,
    spaceBetween: 30,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  });

// pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // }, pagination noqteler demekdir burda ehtiyac yoxdur
  
// java script OOP Object Oriented Programming dilidir

// adi parametrsiz ve ya regular funksiya
// function saytaDaxilOlaniSalamla() {
//     alert ("Welcome, dear!")
//     }
//     //parametrli funksiya
// function salamla(ad) {
//     alert ("Xosh geldin " + ad)
// }

// salamla ("Elgun")
// salamla ("Fidan")

// console. log (window)

window.addEventListener("load", getMehsullariGetir)

async function getMehsullariGetir() {
    const unvan = "https://fakestoreapi.com/products"

    try {
        const internetdenGelenCavab = await fetch(unvan)
        // console. log(internetdenGelenCavab)

        const gelenMehsullar = await internetdenGelenCavab. json()
        console. log (gelenMehsullar)

    }

    catch (xeta) {
        console. log(xeta) 
    }

}






    //invoke
    