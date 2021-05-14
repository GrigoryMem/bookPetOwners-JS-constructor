

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

export function inputPers(content1="text",content2="",content3=""){

 return `<input class="table__input" style="width:110px;" type ="${content1}" value="${content2}" placeholder="${content3}">`


}

// приведение объекта к строке
export function css(styles={}){
//     const keys = Object.keys(styles)
// console.log(keys)
//    const array =  keys.map(key=>{
   
//         return `${key}:${styles[key]}`
//     })

//     return array.join(";")

if(typeof styles ==="string") return styles



const toString = key=> `${key}:${styles[key]}`  
/*   
Object.keys(styles) - берем ключи у объекта
toString - приводим к строке каждый элемент
join(";") - соединяем через ; 
*/
return Object.keys(styles).map(toString).join(";")


}



// Функция заполнения  формы для записи нового клиента клиники

export function formAddPers(content,type="",){
    return `<form class="form__note" name = "${type}">
    ${content}
    </hr>
    <button type="submit" id="data-btn" btn btn-primary btn-sm> Добавить запись</button>
    </form>`
    
}

// Формы для сидебара
// Функция создания формы для сидебара SB
export function formSB(type){
    return `
    <form name ="${type}">
        <h5>${type}</h5>
        <div class="form-group">
            <input class="form-control form-control-sm" name="value" placeholder="value">
        </div>
        <div class ="form-group">
            <input class="form-control form-control-sm" name="styles" placeholder="styles">
        </div>
        <button type="submit"  class="btn btn-primary btn-sm"> Добавить</button>
    </form>
    </hr>
    `
}


export function formIntro(type){
    return `<form name ="${type}">
    <h5>${type}</h5>
    <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
    </div>
    <div class="form-group">
        <input class="form-control form-control-sm" name="value1" placeholder="value1">
    </div>
    <div class ="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
    </div>
    <div class ="form-group">
        <input class="form-control form-control-sm" name="styles1" placeholder="styles1">
    </div>
    <button type="submit"  class="btn btn-primary btn-sm"> Добавить</button>
</form>
</hr>
    `
}


export function formImg(type,file){
    return `
    <form name ="${type}">
        <h5>${type}</h5>
        <div class="form-group">
            <input type=${file} class="form-control form-control-sm"  id ="input-file" name="value" placeholder="value">
        </div>
        <div class ="form-group">
            <input class="form-control form-control-sm" name="styles" placeholder="styles">
        </div>
        <button type="submit"  class="btn btn-primary btn-sm"> Добавить</button>
    </form>
    </hr>
    `
}


export function addPicture(type){
    return `
    
            <input type=${type} value="" class="form-control form-control-sm table__input" id="pet__photo"  name="value" placeholder="value">
       
        
        `

}