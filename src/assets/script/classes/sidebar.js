import {formSB,formIntro, formImg} from '../utils'
import {TitlePoint,IntroPoint,ImgPoint,HeadPoint,PersPoint,InputPers} from './points'
import {img1} from '../model'





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
            formIntro("intro"), // разберись со стилями
            formImg("img","file"), // ошибка при загрузке файла
            formSB("head"),// ошибка
            formSB("person"),// ошибка
            formSB("InputPerson"),// ошибка


    ].join("");
    }

    set myanswer(value){
        return `<p>${value}</p>`
    }

    add(event){ // доступ к event
        event.preventDefault()
        
        const type = event.target.name

        // console.log(event.target) - сама форма
        // получение значений инпутов через атрибут "name"
        const value =event.target.value.value
        
        const styles = event.target.styles.value
      
          
          
        // const styles1 = event.target.styles1.value

        // console.log( styles1)
        // мое дополнение
        // const value1 =event.target.value1.value
        // const styles1 =event.target.styles1.value

        // !!!!!!!!!   ОШИБКА 1 - идет из функции formSB файла utils не учтены что в классе IntroPoint  есть доп поля value1 и styles1
        // console.log(type,value,style)

        //сбор значений инпутов   
            // !! заметка:у класса IntroPoint 2 значения value!!
        //Тернарное выражение:

    //    let newPoint =type === "title"
    //     ? newPoint = new TitlePoint(value,{styles})
    //     : newPoint =  new IntroPoint(value,{styles})
   
    let newPoint

          
        if(type === "title"){
            newPoint = new TitlePoint(value,{styles})

        } else if(type === "intro"){

  
            const value1 =event.target.value1.value
            const styles1 = event.target.styles1.value
            newPoint =  new IntroPoint(value,value1,{styles,styles1})
        }
        else if (type === "img"){
            const file = document.getElementById('input-file').files[0]
            // const type = document.getElementById('input-file').files[0].type


           const  objectURL = window.URL.createObjectURL(file);

            /* важно !!!!
                Использование файлов в веб приложениях
            https://developer.mozilla.org/ru/docs/Web/API/File/Using_files_from_web_applications

            */



            console.log(objectURL)
            console.log(file)
            console.log(window)
            

           
            
            
            
            
            
            newPoint =  new ImgPoint(objectURL,{styles})
           


           

        }else if (type === "head"){
            newPoint =  new HeadPoint(value,{styles})
            // ошибка привязки контекста
        }else if (type === "person"){
            newPoint =  new PersPoint(value,{styles})
        }// ошибка привязки контекста
        else if (type === "InputPerson"){
            newPoint =  new InputPers(value,{styles})
            // ошибка привязки контекста
        }




        // console.log(newPoint);


       
        this.update(newPoint);// updateCallback  для выполение обновления модели данных 
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