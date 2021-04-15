import image1 from '../images/customers/dog1.jpg'
import image2 from '../images/customers/dog2.jpg'

// название и введение

export function row(content){
    return `<div class="row">${content}</div>`

}


export function col(content){
    return `<div class="col-sm">${content}</div>`

}


// утилиты для табличных функций 

export function td(content){
    return  `<td class="col-sm">${content}</td>`
}

export function tr(content, className){
    return   `<table class="table"><tr class="row ${className} ">${content.join("")}</tr></table>`
}


// утилиты для картинок

export function imgLogo(content){
    return ` <div class="logo wrapper"><image  class="logo" src=${content}></div>`
}


export function imgPet(photo){
    return `<img class="imgPet" src="${photo}">`
}