const mainDiv = document.getElementById('content')
const about_page = document.createElement('div')
about_page.classList = "about_page blank"

export function aboutPage() {
    const header = document.createElement('h1')
    header.innerHTML = `<small>our</small> Story!`
    about_page.appendChild(header)

    const aboutBody = document.createElement('p')
    aboutBody.innerHTML = `
        We're a group of lovely young people who are dedicated their lives to help other people, and this is our first project.
        We thought of a restaurant because it's awesome when you bring people the food they like, and it's awesome to take their feedback about the food
        you make, specially if it was a positive one. So! Give us your support by coming to visit our place, we can't wait to hear your opinion!
        <span>♥</span>
    `
    about_page.appendChild(aboutBody)

    mainDiv.appendChild(about_page)
}

export function aboutEventListeners() {
    const aboutBtn = document.getElementById('about')
    aboutBtn.addEventListener('click', () => {
        about_page.classList.forEach((c) => {
            if(c == 'blank') {
                about_page.classList.remove('blank')
            } else {
                about_page.classList.add('blank')
            }
        })
    })
}