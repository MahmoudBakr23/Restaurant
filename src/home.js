import * as varModule from './var';

const mainDiv = document.getElementById('content');


export function navigation() {
	const navList = document.createElement('ul');
	navList.innerHTML = `
        <li><a id="home" href="#home">Home</a></li>
        <li><a id="menu" href="#menu">Menu</a></li>
        <li><a id="about" href="#about">About</a></li>
        <li><a id="contact" href="#contact">Contact</a></li>
    `;
	mainDiv.appendChild(navList);
}

export function homePage() {
	const header = document.createElement('h1');
	header.innerHTML = '<small>welcome</small> To Our Restaurant!';
	varModule.homeSlate.appendChild(header);
	mainDiv.appendChild(varModule.homeSlate);
}

export function homeEventListeners() {
	const homeBtn = document.getElementById('home');
	homeBtn.addEventListener('click', () => {
		varModule.homeSlate.classList.forEach((c) => {
			if (c === 'blank') {
				varModule.homeSlate.classList.remove('blank');
				varModule.menuSlate.classList.add('blank');
				varModule.aboutSlate.classList.add('blank');
				varModule.contactSlate.classList.add('blank');
				homeBtn.classList.add('active');
			} else {
				varModule.homeSlate.classList.add('blank');
			}
		});
	});
}