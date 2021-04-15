

// название и введение

export function row(content,styles = ''){
    return `<div class="row title" style="${styles}">${content}</div>`

}


export function col(content){
    return `<div class="col-sm">${content}</div>`

}


// утилиты для табличных функций 

export function td(content){
    return  `<td class="col-sm">${content}</td>`
}

export function tr(content, className){
    return   `<table class="table"><tr class="row ${className} ">${content}</tr></table>`
}


// утилиты для картинок

export function imgLogo(content){
    return ` <div class="logo wrapper"><image  class="logo" src=${content}></div>`
}


export function imgPet(photo){
    return `<img class="imgPet" src="${photo}">`
}




export function css(styles={}){
//     const keys = Object.keys(styles)
// console.log(keys)
//    const array =  keys.map(key=>{
   
//         return `${key}:${styles[key]}`
//     })

//     return array.join(";")

const toString = key=> `${key}:${styles[key]}`  
/*   
Object.keys(styles) - берем ключи у объекта
toString - приводим к строке каждый элемент
join(";") - соединяем через ;
*/
return Object.keys(styles).map(toString).join(";")


}