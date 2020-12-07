const mainDiv = document.getElementById('content');
const aboutSlate = document.createElement('div');
aboutSlate.classList = 'aboutSlate blank';

export function aboutPage() {
	const header = document.createElement('h1');
	header.innerHTML = '<small>our</small> Story!';
	aboutSlate.appendChild(header);

	const aboutBody = document.createElement('p');
	aboutBody.innerHTML = `
        We're a group of lovely young people who are dedicated their lives to help other people, and this is our first project.
        We thought of a restaurant because it's awesome when you bring people the food they like, and it's awesome to take their feedback about the food
        you make, specially if it was a positive one. So! Give us your support by coming to visit our place, we can't wait to hear your opinion!
        <span>♥</span>
    `;
	aboutSlate.appendChild(aboutBody);

	mainDiv.appendChild(aboutSlate);
}

export function aboutEventListeners() {
	const aboutBtn = document.getElementById('about');
	aboutBtn.addEventListener('click', () => {
		aboutSlate.classList.forEach((c) => {
			if (c === 'blank') {
				aboutSlate.classList.remove('blank');
				aboutBtn.classList.add('active');
			} else {
				aboutSlate.classList.add('blank');
				aboutBtn.classList.remove('active');
			}
		});
	});
}