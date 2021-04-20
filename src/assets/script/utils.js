

// название и введение

export function row(content,styles = '',className = "title"){
    return `<div class="row  ${className}" style="${styles}">${content}</div>`

}


export function col(content,styles = '', className =""){
    return `<div class="col-sm ${className}" style="${styles}">${content}</div>`

}


// утилиты для табличных функций 

export function td(content,styles=""){
    return  `<td class="col-sm" style=${styles}>${content}</td>`
}

export function tr(content, className,styles=""){
    return   `<table class="table"><tr class="row ${className}" style="${styles}">${content}</tr></table>`
}


// утилиты для картинок

export function imgLogo(content,styles=""){
    return ` <div class="logo wrapper" style="${styles}">${content}</div>`
}


export function imgPet(photo){
    return `<img class="imgPet" src="${photo}">`
}

export function inputPers(content=""){

 return `<input  type ="text" value="${content}"/>`
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