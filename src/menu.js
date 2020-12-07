const mainDiv = document.getElementById('content');
const menuSlate = document.createElement('div');
menuSlate.classList = 'menuSlate blank';

export function menuPage() {
	const header = document.createElement('h1');
	header.innerHTML = '<small>our</small> Menu!';
	menuSlate.appendChild(header);


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
	menuSlate.appendChild(menuBody);

	mainDiv.appendChild(menuSlate);
}

export function menuEventListeners() {
	const menuBtn = document.getElementById('menu');
	menuBtn.addEventListener('click', () => {
		menuSlate.classList.forEach((c) => {
			if (c === 'blank') {
				menuSlate.classList.remove('blank');
				menuBtn.classList.add('active');
			} else {
				menuSlate.classList.add('blank');
				menuBtn.classList.remove('active');
			}
		});
	});
}