const smoothScroll = () => {
    const links = document.querySelectorAll('.top-menu > ul > li > a');
    
    for(let i = 0; i < links.length; i++) {

        links[i].addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            const blockID = target.getAttribute('href');
            document.querySelector(blockID).scrollIntoView({
                behavior: "smooth",
                block: "start",
                });
        });
    }
    const evee = document.querySelectorAll('.accordeon > .element > .title');
    console.log('evee: ', evee);
    // document.addEventListener('click', (e) => {
    //     let target = e.target;
    //     console.log('target: ', target);
    // });

    var accordion = document.querySelectorAll('.accordeon > .element');
    for(let w = 0; w < accordion.length; w++) {
		accordion[w].addEventListener('click', change);
		function change(event) {
			let targ = event.target;
			if (targ !== '.title') return;
			if (targ.classList.contains('active')) {
				hideAll();
			} else {
				hideAll();
				targ.classList.add('active');
				showText(targ.nextElementSibling);
			}
		}
		function hideAll() {
			var h3El = accordion.querySelectorAll('.title');
			var divEl = accordion.querySelectorAll('.element-content');
			for (var i = 0; i < h3El.length; i++) {
				h3El[i].classList.remove('active');
			}
			for (var i = 0; i < divEl.length; i++) {
				divEl[i].style.height = '0';
			}
		}
		function showText(textEl) {
			textEl.style.height = textEl.scrollHeight + 'px';
		}
    }
};
export default smoothScroll;