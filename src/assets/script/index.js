const model = [
    {type:"title", value:"Данные о владельцах животных"},
    {type:"intro", value:"Ввведние в таблицу. Инструкция JS"},
    {type:"header", value:[
        "Владелец животного",
            "Кличка животного",
        "Возраст животного,лет",
        "Адрес владельца",
            "Порода/Окрас",
            "Фотография"



        ]},
    {type:"person", value:[
            "Иванов И.И.",
            "Лайка",
            "6",
            "г. Санкт-Петербург, улица Красных Курсантов, дом 4, квартира 17",
            "Метис/Черный",
            "-"




        ]},
    {type:"image",value:"./assets/images/logo.png"}

]


const $site  = document.querySelector("#site");
console.log($site)

model.forEach(point =>{

    let content = "";

    if(point.type === "title"){
        content = title(point);
    } else if(point.type==="intro"){
        content = intro(point);

    } else if(point.type === "header" || point.type ==="person") {

        content = header(point)


    }else if(point.type === "image") {

        content = image(point)


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

// persons
function header(point) {
    const content = point.value.map(item=>`<td class="col-sm">${item}</td>`)


    return  `<table class="table"><tr class="row header">${content.join("")}</tr></table>`

}

function image(point) {
   return ` <div class="row">
                <div class="logo wrapper">
                    <image  class="logo" src=${point.value}>
                </div>
            </div>
   
   `


}