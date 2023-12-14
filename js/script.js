// navigation toggle
const mobileToggle = document.querySelector("#mobile-toggle"),
      navbarMenu = document.querySelector(".navbar-menu");


      mobileToggle.addEventListener("click", () => {
        navbarMenu.classList.toggle("active");
      })
      
      // header
      const header = document.querySelector("header");
      
      window.addEventListener("scroll", () => {
        header.classList.toggle('sticky', window.scrollY > 0);
      })
      
      window.onscroll = () => {
        navbarMenu.classList.remove("active");
      }

//scroll

const imageCarousel = document.querySelector(".slide-container");
let isDragging = false, prevX, startScroll;

const dragStart = (e) => {
  isDragging = true;
  prevX = e.pageX;
  startScroll = imageCarousel.scrollLeft;
}

const dragging = (e) => {
  e.preventDefault();
  if(!isDragging) return;

  imageCarousel.classList.add("draging");
  imageCarousel.scrollLeft = startScroll - (e.pageX - prevX);
}

const dragStop = () => {
  isDragging = false;
  imageCarousel.classList.remove("draging");
}

imageCarousel.addEventListener("mousedown", dragStart);
imageCarousel.addEventListener("mousemove", dragging);
imageCarousel.addEventListener("mouseup", dragStop);

// visible features 

const iconClick = document.querySelectorAll(".icon-1"),
      iconShow = document.querySelectorAll(".feature-icon");

const getbody = (val) => {
  iconShow[val].classList.toggle("show");
}

iconClick.forEach((icon, i) => {
  icon.addEventListener("click", () => {
    getbody(i)
  })
})

// new product filter
const productBtn = document.querySelectorAll(".product-btn"),
      newProductCard = document.querySelectorAll(".new-product-card");

      productBtn.forEach(btn => {
        btn.addEventListener("click", () => {
          productBtn.forEach(btn => {
            btn.classList.remove("hover");
          })
          btn.classList.add("hover");

          let btnValue = btn.getAttribute("data-filter");
          newProductCard.forEach(product => {
            product.classList.add("visible");
            
            if(product.getAttribute("data-item") == btnValue || btnValue == "all") {
              product.classList.remove("visible");
            }
          })
        })
      });

      // blog swipe
      const blogCarousel = document.querySelector(".blog-container"),
      blogIconBtn = document.querySelectorAll(".blog-nav i"),
      blogFirstCard = document.querySelector(".blog-card").offsetWidth;

      blogIconBtn.forEach(icon => {
        icon.addEventListener("click", () => {
          blogCarousel.scrollLeft += icon.id === "left" ? -blogFirstCard : blogFirstCard;
        })
      });


      let startDragging = false, slideX, slideScroll;

      const initStartBlog = (e) => {
        startDragging = true;
        slideX = e.pageX;
        slideScroll = blogCarousel.scrollLeft;
      }

      const initDraggingBlog = (e) => {
        if(!startDragging) return;
        blogCarousel.classList.add("nowDragging");
        blogCarousel.scrollLeft = slideScroll - (e.pageX - slideX);
      }
      
      const initStopBlog = () => {
        blogCarousel.classList.remove("nowDragging");
        startDragging = false;
      }

      blogCarousel.addEventListener("mousedown", initStartBlog);
      blogCarousel.addEventListener("mousemove", initDraggingBlog);
      blogCarousel.addEventListener("mouseup", initStopBlog);


      // contact
      const focusInp = document.querySelectorAll(".input");

      function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
      }
      
      function blurFunc() {
        let parent = this.parentNode;
        if(this.value == "") {
          parent.classList.remove("focus");
        }
      }

      focusInp.forEach(inpt => {
        inpt.addEventListener("focus", focusFunc);
        inpt.addEventListener("blur", blurFunc);
      });

      AOS.init();
      