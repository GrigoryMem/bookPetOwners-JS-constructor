import {model} from './model'
import {templates} from './templates'
import '../css/main.css'


const $site  = document.querySelector("#site");
console.log(templates)

model.forEach(point =>{

    let addContent = templates[point.type]

    // if(point.type === "title"){
    //     content = title(point);
    // } else if(point.type==="intro"){
    //     content = intro(point);

    // } else if(point.type === "header" || point.type ==="person") {

    //     content = header(point)


    // } else if(point.type ==="person") {

    //     content = person(point)


    // } else if(point.type === "image") {

    //     content = image(point)


    // }


    $site.insertAdjacentHTML("beforeend",addContent(point));


})



