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

// function salamla(ad) {
//     alert ("Xosh geldin " + ad)
// }

// salamla ("Elgun")
// salamla ("Fidan")

// console. log (window)

// window.addEventListener("load", getMehsullariGetir)

// async function getMehsullariGetir() {
//     const unvan = "https://fakestoreapi.com/products"

//     try {
//         const internetdenGelenCavab = await fetch(unvan)


//         const gelenMehsullar = await internetdenGelenCavab. json()
//         console. log (gelenMehsullar)

//     }

//     catch (xeta) {
//         console. log(xeta) 
//     }

// }


// Awards Section start

const swiper = new Swiper(".awardsSwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },

});


{/*  */}

const mukafatlarDivi = document.querySelector("#mukafatlar")


// addEventListener-lerde funksiyani cagirmaq olmaz!
window.addEventListener("load",getLocaldanMelumatlariGetir)

async function getLocaldanMelumatlariGetir() {
  const unvan = "assets/mukafatlar.json"

  // geekforgeeks-de interview suallarina baxmaq olar

  try {
    const gelenCavab = await fetch (unvan)
   
    const mukafatlar = await gelenCavab.json()

    // Array methods - arashdirib oyrenmek
    // pop push shift unshift map filter find - arashdirib oyrenmek

    // callback
    // HOF Higher Order Function

    // for(let i=0; i,mukafatlar.length; i++) {
    //   console.log(birMukafat)
    // } - evvel bele yazilirdi for ile, indi ashagidaki kimi forEach ile

    mukafatlar.forEach(function(birMukafat) {
      mukafatlarDivi.innerHTML += `
      <div class="swiper-slide text-center">
<div class="card rounded-0">
    <img src="${birMukafat.mukafatin_shekli}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${birMukafat.mukafat_adi}</h5>
      <p class="card-text">${birMukafat.mukafatin_metni}</p>
    </div>
  </div>
</div>
      `
  });

}

catch(err) {

}
  
}


// Awards Section end

// Object.freeze() - arashdirib oyrenmek

new Accordion('.accordion-left');
new Accordion('.accordion-right');








// try {
//   life = () => {
//     learn++;
//     believe++;
//     love++;
//     dream++;
//     work++;
    
//   };
// } 
// catch (doubt) {
//   alert(`ignore doubts, be happy keep living`);
//   life();
// }
// Life is good
   