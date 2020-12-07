import * as varModule from './var';

const mainDiv = document.getElementById('content');


export function aboutPage() {
	const header = document.createElement('h1');
	header.innerHTML = '<small>our</small> Story!';
	varModule.aboutSlate.appendChild(header);

	const aboutBody = document.createElement('p');
	aboutBody.innerHTML = `
        We're a group of lovely young people who are dedicated their lives to help other people, and this is our first project.
        We thought of a restaurant because it's awesome when you bring people the food they like, and it's awesome to take their feedback about the food
        you make, specially if it was a positive one. So! Give us your support by coming to visit our place, we can't wait to hear your opinion!
        <span>♥</span>
    `;
	varModule.aboutSlate.appendChild(aboutBody);

	mainDiv.appendChild(varModule.aboutSlate);
}

export function aboutEventListeners() {
	const aboutBtn = document.getElementById('about');
	aboutBtn.addEventListener('click', () => {
		varModule.aboutSlate.classList.forEach((c) => {
			if (c === 'blank') {
				varModule.aboutSlate.classList.remove('blank');
				varModule.contactSlate.classList.add('blank');
				varModule.menuSlate.classList.add('blank');
				varModule.homeSlate.classList.add('blank');
				aboutBtn.classList.add('active');
			} else {
				varModule.aboutSlate.classList.add('blank');
			}
		});
	});
}