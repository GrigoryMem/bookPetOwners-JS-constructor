const model = [
    {type:"title", value:"Данные о владельцах"},
    {type:"intro", value:"Ввведние в таблицу. Инструкция JS"},
    {type:"header", value:[
        "Владелец животного",
            "Кличка животного",
        "Возраст животного",
        "Адрес владельца",
            "Адрес владельца",
            "Адрес владельца",
            "Владелец животного",
            "Кличка животного",
            "Возраст животного",
            "Адрес владельца",
            "Адрес владельца",
            "Адрес владельца"







        ]}

]


const $site  = document.querySelector("#site");
console.log($site)

model.forEach(point =>{

    let content = "";

    if(point.type === "title"){
        content = title(point);
    } else if(point.type==="intro"){
        content = intro(point);

    } else if(point.type === "header") {

        content = header(point)


    }


    $site.insertAdjacentHTML("beforeend",content);


})



function title(point) {
   return ` <div class="row">
                <div class="col-sm">
                    <h1>${point.value}</h1>
                </div>
       </div>`
}

function intro(point) {
    return `
        <div class="row">
                <div class="col-sm">
                    <p>${point.value}</p>
                </div>
            </div>
        `

}


function header(point) {
    const content = point.value.map(item=>`<div class="col-sm">${item}</div>`)


    return  `<div class="row header">${content.join("")}</div>`

}