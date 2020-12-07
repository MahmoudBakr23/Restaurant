import * as varModule from './var';

const mainDiv = document.getElementById('content');

export function menuPage() {
	const header = document.createElement('h1');
	header.innerHTML = '<small>our</small> Menu!';
	varModule.menuSlate.appendChild(header);


	const menuBody = document.createElement('table');
	menuBody.innerHTML = `
        <tr>
            <th>Sort</th>
            <th>X Small</th>
            <th>Small</th>
            <th>Medium</th>
            <th>Large</th>
        </tr>
        <tr>
            <th>Family</th>
            <td>$25</td>
            <td>$35</td>
            <td>$45</td>
            <td>$55</td>
        </tr>
        <tr>
            <th>Couples</th>
            <td>$25</td>
            <td>$35</td>
            <td>$45</td>
            <td>$55</td>
        </tr>
        <tr>
            <th>VIP</th>
            <td>$25</td>
            <td>$35</td>
            <td>$45</td>
            <td>$55</td>
        </tr>
    `;
	varModule.menuSlate.appendChild(menuBody);

	mainDiv.appendChild(varModule.menuSlate);
}

export function menuEventListeners() {
	const menuBtn = document.getElementById('menu');
	menuBtn.addEventListener('click', () => {
		varModule.menuSlate.classList.forEach((c) => {
			if (c === 'blank') {
				varModule.menuSlate.classList.remove('blank');
				varModule.aboutSlate.classList.add('blank');
				varModule.contactSlate.classList.add('blank');
				varModule.homeSlate.classList.add('blank');
				menuBtn.classList.add('active');
			} else {
				varModule.menuSlate.classList.add('blank');
			}
		});
	});
}