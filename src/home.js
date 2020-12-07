const mainDiv = document.getElementById('content');
const homeSlate = document.createElement('div');
homeSlate.classList = 'homeSlate blank';

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
	homeSlate.appendChild(header);
	mainDiv.appendChild(homeSlate);
}

export function homeEventListeners() {
	const homeBtn = document.getElementById('home');
	homeBtn.addEventListener('click', () => {
		homeSlate.classList.forEach((c) => {
			if (c === 'blank') {
				homeSlate.classList.remove('blank');
				homeBtn.classList.add('active');
			} else {
				homeSlate.classList.add('blank');
				homeBtn.classList.remove('active');
			}
		});
	});
}