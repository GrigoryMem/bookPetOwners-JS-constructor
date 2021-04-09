const model = [
    {type:"title", value:"Hello, world! Название таблицы JS"},
    {type:"intro", value:"Ввведние в таблицу. Инструкция JS"},
    {type:"header", value:[
        "Владелец животного",
            "Кличка животного",
        "Возраст животного",
        "Адрес владельца"


        ]}
]


const $site  = document.querySelector("#site");
console.log($site)

model.forEach(point =>{

    let content = "";

    if(point.type === "title"){
        content = `
        <div class="row">
                <div class="col-sm">
                    <h1>${point.value}</h1>
                </div>
            </div>
        
        `
    } else if(point.type==="intro"){
        content = `
        <div class="row">
                <div class="col-sm">
                    <p>${point.value}</p>
                </div>
            </div>
        `

    } else if(point.type === "header") {

    }

    console.log(content);

    $site.insertAdjacentHTML("beforeend",content);


})