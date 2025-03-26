// document.addEventListener("DOMContentLoaded", function () {
//     // Function to load external HTML files into divs with data-include
//     function loadIncludes() {
//         const includes = document.querySelectorAll("[data-include]");
//         const promises = [];

//         includes.forEach(el => {
//             const file = el.getAttribute("data-include");
//             if (file) {
//                 const promise = fetch(file)
//                     .then(response => response.text())
//                     .then(data => {
//                         el.innerHTML = data;
//                     });
//                 promises.push(promise);
//             }
//         });

//         // Wait for all includes to load before initializing event listeners
//         Promise.all(promises).then(() => {
//             initializeMenu();
//         });
//     }

//     // Function to add event listeners after header is loaded
//     function initializeMenu() {

//         const menuToggle = document.getElementById("menuToggle");
//         const mobileMenu = document.getElementById("mobileMenu");
//         const closeMenu = document.getElementById("closeMenu");

//         if (menuToggle && mobileMenu && closeMenu) {
//             menuToggle.addEventListener("click", () => {
//                 mobileMenu.classList.toggle("translate-y-0");
//                 mobileMenu.classList.toggle("-translate-y-full");
//             });

//             closeMenu.addEventListener("click", () => {
//                 mobileMenu.classList.toggle("translate-y-0");
//                 mobileMenu.classList.toggle("-translate-y-full");
//             });
//         } else {
//             console.error("One or more elements are missing! Check if header.html loaded correctly.");
//         }
//     }

//     // Load header and footer first, then initialize menu
//     loadIncludes();
// });
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");

  // Function to set active link
  function setActiveLink(link) {
    links.forEach((el) => el.classList.remove("active")); // Remove active class from all
    link.classList.add("active"); // Add active class to clicked link
  }

  // Check active link on page load
  links.forEach((link) => {
    if (link.href === window.location.href) {
      setActiveLink(link);
    }
    link.addEventListener("click", function (e) {
      setActiveLink(this);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
    on: {
      init: function () {
        toggleArrows(this);
      },
      slideChange: function () {
        toggleArrows(this);
      },
    },
  });

  function toggleArrows(swiper) {
    const prevBtn = document.querySelector(".swiper-button-prev");
    const nextBtn = document.querySelector(".swiper-button-next");

    if (swiper.slides.length <= swiper.params.slidesPerView) {
      prevBtn.classList.add("hidden");
      nextBtn.classList.add("hidden");
    } else {
      prevBtn.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
    }
  }
});

document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const isActive = content.classList.contains("open");

    // Close all accordions first
    document
      .querySelectorAll(".accordion-content")
      .forEach((content) => content.classList.remove("open"));
    document.querySelectorAll(".accordion-header").forEach((header) => {
      header.classList.remove("bg-[#EAFBF9]", "text-[#5C9991]");
      header.classList.add("bg-[#F2F2F2]", "text-[#363636]");
    });

    document.querySelectorAll(".accordion-header i").forEach((icon) => {
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    });

    // If clicked accordion was closed, open it smoothly
    if (!isActive) {
      content.classList.add("open");
      button.classList.remove("bg-[#F2F2F2]", "text-[#363636]");
      button.classList.add("bg-[#EAFBF9]", "text-[#5C9991]");
      button.querySelector("i").classList.remove("fa-plus");
      button.querySelector("i").classList.add("fa-minus");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  if (menuToggle && mobileMenu && closeMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("translate-y-0");
      mobileMenu.classList.toggle("-translate-y-full");
    });

    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.toggle("translate-y-0");
      mobileMenu.classList.toggle("-translate-y-full");
    });
  } else {
    console.error("One or more elements are missing!");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(".storybookspage  .swiper")
    .forEach(function (swiperElement, index) {
      new Swiper(swiperElement, {
        loop: true,
        pagination: {
          el: swiperElement.nextElementSibling, // Select the pagination directly after the Swiper container
          clickable: true,
        },
        navigation: {
          nextEl: swiperElement.parentElement.querySelector(
            ".swiper-button-next"
          ),
          prevEl: swiperElement.parentElement.querySelector(
            ".swiper-button-prev"
          ),
        },
      });
    });
});
