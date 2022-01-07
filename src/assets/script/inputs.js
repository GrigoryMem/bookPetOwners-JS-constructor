import {inputPers,addPicture, choiceOfList} from './utils'
import {InputPers} from './classes/points'
import { breeds, runList } from './data/search';

export let inputPerson =  new InputPers( [inputPers("text","Иванов И.И.","Введите ФИО"),
inputPers("text","Шарик","Введите Кличку животного"),
inputPers("date","1999-08-07","Дата рождения и возраст"),
inputPers("text","СПб, Дворцовая площадь,дом 1","Введите адрес владельца"),
// inputPers("text","Такса","Введите породу животного"),
choiceOfList( runList(breeds)),

addPicture("file")]);



let table =document.querySelectorAll(".table__input");

let tr = document.querySelectorAll(".row__input")

// работа над hover input
table.forEach(elem=>{
    let parent = elem.parentNode.parentNode
    parent.addEventListener("mouseover",event=>{

        parent.style.opacity = "0.7";

        elem.addEventListener("mouseover",event=>{
            event.stopPropagation();
          elem.style.opacity = 1;
        })
        
    })
   



    parent.addEventListener("mouseout",event=>{
        parent.style.opacity = "1";
     
    })

    
})











