const mainDiv = document.getElementById('content')
const contact_page = document.createElement('div')
contact_page.classList = "contact_page blank"

export function contactPage() {
    const header = document.createElement('h1')
    header.innerHTML = `
        <small>our</small> Mail!
        <p>send us a lovely message <span>♥</span></p>
    `
    contact_page.appendChild(header)

    const contactBody = document.createElement('form')
    contactBody.innerHTML = `
        <input type="text" placeholder="Name:*"><br/>
        <input type="text" placeholder="Email:*"><br/>
        <input type="number" placeholder="Numer of Family Members:*"><br/>
        <input type="text" placeholder="Phone Number:*"><br/>
        <input type="date"><br/>
        <textarea cols="50" rows="5" placeholder="leave a message:*"></textarea><br/>
        <button type="submit" value="Send">Send</button>
    `
    contact_page.appendChild(contactBody)

    mainDiv.appendChild(contact_page)
}

export function contactEventListeners() {
    const contactBtn = document.getElementById('contact')
    contactBtn.addEventListener('click', () => {
        contact_page.classList.forEach((c) => {
            if(c == 'blank') {
                contact_page.classList.remove('blank')
                contactBtn.classList.add('active')
            } else {
                contact_page.classList.add('blank')
                contactBtn.classList.remove('active')
            }
        })
    })
}