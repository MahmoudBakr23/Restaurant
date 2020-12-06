const mainDiv = document.getElementById('content')
const home_page = document.createElement('div')
home_page.classList = "home_page blank"

export function navigation() {
    const navList = document.createElement('ul')
    navList.innerHTML = `
        <li id="home"><a href="#home">Home</a></li>
        <li id="menu"><a href="#menu">Menu</a></li>
        <li id="about"><a href="#about">About</a></li>
        <li id="contact"><a href="#contact">Contact</a></li>
    `
    mainDiv.appendChild(navList)
}

export function homePage() {
    const header = document.createElement('h1')
    header.innerHTML = `<small>welcome</small> To Our Restaurant!`
    home_page.appendChild(header)
    mainDiv.appendChild(home_page)
}

export function homeEventListeners() {
    const homeBtn = document.getElementById('home')
    homeBtn.addEventListener('click', () => {
        home_page.classList.forEach((c) => {
            if(c == 'blank') {
                home_page.classList.remove('blank')
            } else {
                home_page.classList.add('blank')
            }
        })
    })
}