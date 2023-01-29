import { categoriesArray } from "./categoryList.js"
import { wordList } from "./wordList.js"

const showCategories = document.querySelector('.container-categories-wrap')

categoriesArray.forEach((data) => {
    showCategories.innerHTML += `
    <div class="container-category">
        <h1>${data.name}</h1>
        <img class="imgW" src="${data.img}">
        <a href="${data.href}">Jugar</a>
    </div>
    `
})

document.addEventListener('keyup', (e) => {
    if (e.target.matches('#search')) {
        const search = document.querySelectorAll(".container-category")
        search.forEach((name) => {
            if (name.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
                name.classList.remove("filter")
            } else {
                name.classList.add('filter')
            }
        })
    }
})
