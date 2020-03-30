$(function(){
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    const keys = {37: 1, 38: 1, 39: 1, 40: 1};

    function preventDefault(e) {
      e = e || window.event;
      if (e.preventDefault)
          e.preventDefault();
      e.returnValue = false;  
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    function disableScroll() {
      if (window.addEventListener) // older FF
          window.addEventListener('DOMMouseScroll', preventDefault, false);

      console.log('modernizr', Modernizr.passiveeventlisteners);

      window.addEventListener('wheel', preventDefault,
          Modernizr.passiveeventlisteners ? {passive: false} : false); // modern standard
      document.addEventListener('mousewheel', preventDefault,
          Modernizr.passiveeventlisteners ? {passive: false} : false); // older browsers, IE
      window.addEventListener('mousewheel', preventDefault,
          Modernizr.passiveeventlisteners ? {passive: false} : false); // older browsers, IE
      window.addEventListener('touchmove', preventDefault,
          Modernizr.passiveeventlisteners ? {passive: false} : false); // mobile
      document.onkeydown  = preventDefaultForScrollKeys;
    }

    function enableScroll() {
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        document.removeEventListener('mousewheel', preventDefault, false);
        window.removeEventListener('mousewheel', preventDefault, false);
        window.removeEventListener('wheel', preventDefault, false);
        window.removeEventListener('touchmove', preventDefault, false);
        document.onkeydown = null;
    }

    $('.header_burger').click(disableScroll);
    $('.header_close').click(enableScroll);
    $('.header_menu_desktop').click(enableScroll);
})


		var mySwiper = new Swiper ('.swiper-container', {
		    loop: true,
		    slidesPerView: 3,
		    spaceBetween: 20,
		    breakpoints: {    
		      320: {       
		         slidesPerView: 1,    
		      },     
		      648: {       
		         slidesPerView: 2,           
		      },
		      1025:{       
		         slidesPerView: 3,           
		      } 
		  
		   	} ,

		    navigation: {
		      nextEl: '.swiper-button-next',
		      prevEl: '.swiper-button-prev',
		    },
		    pagination: {
		    el: '.swiper-pagination',
        	clickable: true,
        	spaceBetween: 23,
        	
		    },
		});


		let burger = document.querySelector('.header_burger');
		let menu = document.querySelector('.header_menu_desktop');
		let close = document.querySelector('.header_close');
		
		let menuElements = document.querySelectorAll('.header_menu_desktop li a');
		let menuElementsFooter = document.querySelectorAll('.footer_menu li a');



		for  (let i = 0; i < menuElements.length; i++) {
			menuElements[i].addEventListener('click', function(e) {
				e.preventDefault();
				console.log(this)
				let href=this.getAttribute('href');
				console.log(href)

				console.log(document.getElementById(href))

				let currentSection = document.getElementById(href);
				let offset = currentSection.offsetTop;

				console.log(offset)

				window.scrollTo(document.body, offset, 0);

				menu.classList.remove('header_menu_desktop_open');
			});
		}
		for  (let i = 0; i < menuElementsFooter.length; i++) {
			menuElementsFooter[i].addEventListener('click', function(e) {
				e.preventDefault();
				let href=this.getAttribute('href');

				let currentSection = document.getElementById(href);
				let offset = currentSection.offsetTop;

				window.scrollTo(document.body, offset, 0);
			});
		}



		burger.addEventListener('click', function(e) {
			e.preventDefault();

			menu.classList.add('header_menu_desktop_open');
			close.classList.add('display_block');
			burger.classList.add('display_none');
		});

		close.addEventListener('click', function(e) {
			e.preventDefault();
			menu.classList.remove('header_menu_desktop_open');
			close.classList.remove('display_block');
			burger.classList.remove('display_none');
		});

