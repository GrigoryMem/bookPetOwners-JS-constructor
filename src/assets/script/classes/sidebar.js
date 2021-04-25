import {formSB} from '../utils'



export class Sidebar {
    constructor(selector){
        this.$el = document.querySelector(selector)
        this.paste()
       

  
    }


    paste(){

        this.$el.insertAdjacentHTML('afterbegin',this.admin) // getter
        this.$el.insertAdjacentHTML('afterbegin',this.myanswer = "I am administrator") //setter
        this.$el.addEventListener("submit",this.add)
    }

    get admin(){
        return [
            formSB("title"),
            formSB("intro"),
            formSB("img"),
            formSB("head"),
            formSB("person"),
            formSB("InputPerson"),


    ].join("");
    }

    set myanswer(value){
        return `<p>${value}</p>`
    }


    add(event){
        event.preventDefault()
    }

   
}





















// // mine
// export class Test {
//     constructor(selector){
//         this.elem = document.querySelector(selector)

//         this.elem.insertAdjacentHTML("afterbegin",'<p>Привет лунатикам</p>')
//     }


//     toStyle(){

//         this.elem.style.color = "white"

//     }
// }


// export class FontStyle extends Test{
//     constructor(selector){
//         super(selector)
//     }


//     toFont(){
//         this.elem.style.fontSize = "20px"
//     }


// }