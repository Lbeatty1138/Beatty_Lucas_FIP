console.log("fired!");

		var button 		= document.querySelector("#button");
		var burgerCon	= document.querySelector(".burgerCon");
		var hamEnd = document.querySelector("#hamEnd");
		var mainHeader	= document.querySelector("#mainHeader");
		var list = document.querySelector("li");

		function hamburgerMenu() {
			burgerCon.classList.toggle("slideToggle");
			hamEnd.classList.toggle("slideToggle");
			button.classList.toggle("slideToggle");
			list.classList.toggle("slideToggle");

		}

		function closeMenu() {

			if (window.matchMedia("(min-width: 1024px)").matches && burgerCon.classList.contains('slideToggle') ) {
			console.log("media guery fired");
			burgerCon.classList.remove('slideToggle');
			button.classList.remove('expanded');
			}
		}

		button.addEventListener("click", hamburgerMenu, false);

		window.addEventListener("resize", closeMenu);

