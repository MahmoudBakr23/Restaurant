const mainDiv = document.getElementById('content');
const contactSlate = document.createElement('div');
contactSlate.classList = 'contactSlate blank';

export function contactPage() {
	const header = document.createElement('h1');
	header.innerHTML = `
        <small>our</small> Mail!
        <p>send us a lovely message <span>♥</span></p>
    `;
	contactSlate.appendChild(header);

	const contactBody = document.createElement('form');
	contactBody.innerHTML = `
        <input type="text" placeholder="Name:*"><br/>
        <input type="text" placeholder="Email:*"><br/>
        <input type="number" placeholder="Numer of Family Members:*"><br/>
        <input type="text" placeholder="Phone Number:*"><br/>
        <input type="date"><br/>
        <textarea cols="50" rows="5" placeholder="leave a message:*"></textarea><br/>
        <button type="submit" value="Send">Send</button>
    `;
	contactSlate.appendChild(contactBody);

	mainDiv.appendChild(contactSlate);
}

export function contactEventListeners() {
	const contactBtn = document.getElementById('contact');
	contactBtn.addEventListener('click', () => {
		contactSlate.classList.forEach((c) => {
			if (c === 'blank') {
				contactSlate.classList.remove('blank');
				contactBtn.classList.add('active');
			} else {
				contactSlate.classList.add('blank');
				contactBtn.classList.remove('active');
			}
		});
	});
}