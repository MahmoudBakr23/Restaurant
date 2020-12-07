import * as varModule from './var';

const mainDiv = document.getElementById('content');


export function contactPage() {
	const header = document.createElement('h1');
	header.innerHTML = `
        <small>our</small> Mail!
        <p>send us a lovely message <span>♥</span></p>
    `;
	varModule.contactSlate.appendChild(header);

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
	varModule.contactSlate.appendChild(contactBody);

	mainDiv.appendChild(varModule.contactSlate);
}

export function contactEventListeners() {
	const contactBtn = document.getElementById('contact');
	contactBtn.addEventListener('click', () => {
		varModule.contactSlate.classList.forEach((c) => {
			if (c === 'blank') {
				varModule.contactSlate.classList.remove('blank');
				varModule.homeSlate.classList.add('blank');
				varModule.aboutSlate.classList.add('blank');
				varModule.menuSlate.classList.add('blank');
				contactBtn.classList.add('active');
			} else {
				varModule.contactSlate.classList.add('blank');
			}
		});
	});
}