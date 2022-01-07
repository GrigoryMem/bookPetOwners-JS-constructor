import { choiceOfList } from "../utils";
// варианты пород собак
 export const breeds  = ["Лайка","Такса","Пекинес","Спаниэль", "Беспородная","Овчарка","Колли"];


// console.log(choiceOfList(breeds[1]))

let box ="";
// реализуем список вариантов пород собак
export function runList(breeds){
    for(let i in breeds){
        
     box+=`<option>${breeds[i]}</option>`
        
         
    }
    // console.log(box)
    return box
}

// метод append???
