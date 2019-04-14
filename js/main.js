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
	[`stream_photo_lg_1`, `stream_photo_lg_2`, `stream_photo_lg_3`, `Here's an overview of what happened over a few weekends in the 
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
	
	[`eyeImg3`, `eyeImg2`, `eyeImg1`, `TRAA Walleye Hatchery
	The TRAA and the Upper Thames River Conservation Authority (UTRCA), with the blessing of the Ministry of Natural Resources (MNR), agreed to the operation of a walleye hatchery in Fanshawe Conservation Area, just north-east of London, Ontario. While this was a relatively short-lived initiative, it was very popular with members and the community at large. Many would conclude it was also very successful considering the exciting fishery that developed closely thereafter. The Lake Erie Management Unit (LEMU) forced the TRAA to shut down the walleye hatchery after only three seasons of operation. The LEMU's decision was dubiously based on an American study, that the Thames River walleye were genetically unique from the Grand River walleye (the TRAA's source for eggs). Interestingly, walleye (from egg through adult stages) continue to be transferred throughout Ontario waterways and water bodies seemingly without regard for genetic purity.
	`, `The UTRCA offered the use of a repossessed house trailer as an enclosure for the walleye hatchery operations. The trailer was gutted and refitted with the hatchery equipment and all that was needed was a source for walleye eggs. After a couple of initial trial hatches of walleye, the TRAA was confident enough to locate the walleye hatchery in a more permanent and secure location within Fanshawe Conservation Area.  We painting the Walleye Hatchery "TRAA green". Note the outlet from the hatchery into the outdoor circular growth tank. The awning offered much needed shade to keep the water in the tank from heating up too much (even so, dedicated members were packing it with ice during the hottest days).
	`, `The final checks on the newly installed "bell jar" incubators. Each unit was separately valved to precisely control water flow so that the eggs were constantly agitated by fresh water from the bottom. The walleye fry, begin hatching soon after placement in the hatchery and start swimming almost immediately. All five bell jars loaded with walleye eggs. Once the fry hatch they naturally swim upward and are taken away by the clear tube, into the black drain to the outside circular growth tank. The fry were kept only for a short period of time in the growth tank as they became cannibalistic. After their short growth period they were released into weedy, protected areas in Fanshawe Reservoir to begin their new lives.`],
	
	[`fryImg1`,`fryImg2`, `fryImg3`, `This is the first paragraph for the third image selector. Put 
	in here whatever you want`, `This is the second paragraph for the third image selector. Put in here whatever you want`, 
	`This is the third paragraph for the third image selector. Put in here whatever you want`]
	];
	let images = document.querySelector("#polaroidImg");

	allImg.forEach(project => project.addEventListener("click", function() {
		images.style.WebkitAnimation = "appear 0.3s ease";
				images.addEventListener("webkitAnimationStart", start);

		images.addEventListener("webkitAnimationEnd", end);
	}));

	// swap Animations
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
		// dynamic info finished


	}))

	// Lightbox
	let projImages = document.querySelectorAll(".projImg"),
		lightbox = document.querySelector(".lightbox"),
		lightboxImg = document.querySelector(".lightBoxImage");

	image0.addEventListener("click", function() {
		lightbox.classList.add("showLightBox");
		lightboxImg.src = `${image0.src}`;
	});
	image1.addEventListener("click", function() {
		lightbox.classList.add("showLightBox");
		lightboxImg.src = `${image1.src}`;
	});
	image2.addEventListener("click", function() {
		lightbox.classList.add("showLightBox");
		lightboxImg.src = `${image2.src}`;
	});

	function closeLB() {
		lightbox.classList.remove("showLightBox");
	}

	lightbox.addEventListener("click", closeLB);
	// Lightbox finish

