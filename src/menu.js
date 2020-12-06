const mainDiv = document.getElementById('content')
const menu_page = document.createElement('div')
menu_page.classList = "menu_page blank"

export function menuPage() {
    const header = document.createElement('h1')
    header.innerHTML = `<small>our</small> Menu!`
    menu_page.appendChild(header)
    

    const menuBody = document.createElement('table')
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
    `
    menu_page.appendChild(menuBody)

    mainDiv.appendChild(menu_page)
}

export function menuEventListeners() {
    const menuBtn = document.getElementById('menu')
    menuBtn.addEventListener('click', () => {
        menu_page.classList.forEach((c) => {
            if(c == 'blank') {
                menu_page.classList.remove('blank')
            } else {
                menu_page.classList.add('blank')
            }
        })
    })
}