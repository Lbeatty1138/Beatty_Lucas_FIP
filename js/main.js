console.log("fired!");

		var button 		= document.querySelector("#button");
		var burgerCon	= document.querySelector(".burgerCon");
		var hamEnd 		= document.querySelector("#hamEnd");
		var mainHeader	= document.querySelector("#mainHeader");
		var list 		= document.querySelector("li");

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






let image0 		= document.querySelector("#img0"),
	image1 		= document.querySelector("#img1"),
	image2 		= document.querySelector("#img2"),
	par0		= document.querySelector("#par0"),
	par1		= document.querySelector("#par1"),
	par2		= document.querySelector("#par2"),
	allImg		= document.querySelectorAll(".projectHolder");

	let projectInfo = [
	[`headshot_1_lg`, `headshot_3_lg`, `headshot_2_lg`, `Here's an overview of what happened over a few weekends in the 
	Spring of 2012 when TRAA members and personnel from the Upper Thames River Conservation Authority (UTRCA) waded in 
	for Year 3 of our 5-year Salmonid Tagging and Monitoring Program. Jon George, an MNR biologist from Thunder Bay who 
	is helping us out with this project.`, `We survey the river to find Rainbow Trout so that we can stun the rainbow 
trout to relocate them down the river. Dan Schinkelshoek and Rob Huber follow closely ready to stunned rainbow trout to
 relocate them down the river. Oddly enough, many fish this year were found in the faster flows such as this good rifle 
 just upstream from a large culvert. `, `Once the fish are stunned we prepare to revive this female rainbow trout in the 
 lower section of the creek before we could safely conduct the tagging, measuring and sampling procedures. Once the trout 
  measured, the girth of a solid rainbow trout. The length, the sex and whether or not the fish has already spawned are 
  also recorded in the monitoring log. This information, along with a scale sample are all referenced to the tag number 
  that will be attached to the fish. Then we "sewing" of a small, plastic tag to the dorsal fin of the rainbow trout is 
  actually the trickiest of all the procedures performed. The tag has a number sequence that will help the OMNR (Ontario 
  Ministry of Natural Resources) and the TRAA to understand the fish's activities.`],
	
	[`headshot_2_lg`, `headshot_1_lg`, `headshot_3_lg`, `This is the first paragraph for the second image selector. Put 
	in here whatever you want`, `This is the second paragraph for the second image selector. Put in here whatever you want`, 
	`This is the third paragraph for the second iamge selector. Put in here whatever you want`],
	
	[`headshot_3_lg`,`headshot_2_lg`, `headshot_1_lg`, `This is the first paragraph for the third image selector. Put 
	in here whatever you want`, `This is the second paragraph for the third image selector. Put in here whatever you want`, 
	`This is the third paragraph for the third image selector. Put in here whatever you want`]
	];
	let images = document.querySelector("#polaroidImg");

	allImg.forEach(project => project.addEventListener("click", function() {
		images.style.WebkitAnimation = "appear 0.3s ease";
				images.addEventListener("webkitAnimationStart", start);

		images.addEventListener("webkitAnimationEnd", end);
	}));

	function start() {
		console.log("animation Start");
	};

	function end() {
		console.log("animation End");
		images.removeAttribute("style");
	};

	allImg.forEach(project => project.addEventListener("click", function() {
		let i = this.className.split(" ")[1].slice(7,8);
		console.log(i);

		image0.src = `images/${projectInfo[i][0]}.jpg`;
		image1.src = `images/${projectInfo[i][1]}.jpg`;
		image2.src = `images/${projectInfo[i][2]}.jpg`;

		par0.innerHTML = `${projectInfo[i][3]}`;
		par1.innerHTML = `${projectInfo[i][4]}`;
		par2.innerHTML = `${projectInfo[i][5]}`;


	}))

