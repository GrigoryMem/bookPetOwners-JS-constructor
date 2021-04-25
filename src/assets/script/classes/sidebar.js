import {formSB} from '../utils'
import {TitlePoint,IntroPoint,ImgPoint,HeadPoint,PersPoint,InputPers} from './points'


export class Sidebar {
    constructor(selector,updateCallBack){
        this.$el = document.querySelector(selector)
        this.update = updateCallBack
        
        this.paste()  // вставка в админ функций инпутов
       

  
    }


    paste(){

        this.$el.insertAdjacentHTML('afterbegin',this.admin) // getter
        this.$el.insertAdjacentHTML('afterbegin',this.myanswer = "I am administrator") //setter
        this.$el.addEventListener("submit",this.add.bind(this))  // обработка формы, bind какпривязывание конекста
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


    add(event){ // доступ к event
        event.preventDefault()

        const type = event.target.name
        // получение значений инпутов через атрибут "name"
        const value =event.target.value.value
        const styles = event.target.styles.value
        // console.log(type,value,style)

        //сбор значений инпутов   
            // !! заметка:у класса IntroPoint 2 значения value!!
        // тернарное выражение:

       let newPoint =type === "title"
        ? newPoint = new TitlePoint(value,{styles})
        : newPoint =  new IntroPoint(value,{styles})
       
        this.update(newPoint);  // updateCallback  для выполение обновления модели данных 
        // if(type === "title"){
        //     newPoint = new TitlePoint(value,{styles})

        // } else {
        //     newPoint =  new IntroPoint(value,{styles})
        // }
        // console.log(newPoint);
        // очистка форм
        event.target.value.value = "";
        event.target.styles.value = "" ;


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