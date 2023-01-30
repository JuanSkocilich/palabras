import { categoriesArray } from "./categoryList.js"
import { animalsArray } from "./wordList.js"

const showCategories = document.querySelector('.container-categories-wrap')

if (showCategories !== null) {
    categoriesArray.forEach((data) => {
        showCategories.innerHTML += `
    <div class="container-category">
    <img class="imgW" src="${data.img}">
        <h1>${data.name}</h1>
        <a href="${data.href}">Jugar</a>
    </div>
    `
    })
}

document.addEventListener('keyup', (e) => {
    if (e.target.matches('#search')) {
        const search = document.querySelectorAll(".container-category")
        const containerCategoriesWrap = document.querySelector('.container-categories-wrap')
        search.forEach((name) => {
            if (name.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
                name.classList.remove("filter")
            } else {
                name.classList.add('filter')
            }
        })
    }
})

/* To the Top */
window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container').classList.add('show')
    } else {
        document.querySelector('.go-top-container').classList.remove('show')
    }
}

document.querySelector('.go-top-container')?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
/* ----------------------------------------------------------------------------------------------------------------------------------- */