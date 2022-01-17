import{InputPers, PersPoint,PetPicture} from '../classes/points'
import{clearField,maxId,setIcon} from './data__utils'
import{basket,pencil,saver} from '../model'
import {inputPers,addPicture,td, tr} from '../utils'
import{dateNow} from './date'
import { closeAnimModal, openAnimModal } from './animation'
// рефокторинг

let date = new Date()
// console.log(date)

const users = document.querySelector(".users");



class Data {
    constructor(selectorLoc,selectorbtn,inputs,allBaskets){
        this.location = document.querySelector(selectorLoc)
        this.button = document.querySelector(selectorbtn)
        this.inputs = document.querySelectorAll(inputs)
       
        
        this.addNote()
        this.clearLS = "timebtn"
        this.installIcons()
        this.removeNote()
        this.changeNote()
       
       
       
        


    }

    addNote(){

        //  превращение строки в DOm объект
    let parserBaket = new DOMParser().parseFromString(setIcon(basket,pencil,saver),"text/html") 
    // получение корзины и других иконок
    let domBasket = parserBaket.querySelector(".wrapp__icon");
 // по умолчанию отключение кнопкни сохранить
    let iconSaver = domBasket.querySelector(".icon__saver");

    iconSaver.disabled = true;
    
        //событие получение картинки
        let image;   
        let parent = document.querySelectorAll(".td__content")
        document.addEventListener("change",(event)=>{
            
            
            
            if(event.target.classList.contains('table__input')){
                let file = event.target.files[0];
                let reader = new FileReader();
              
                  image = document.createElement("img");
                image.classList.add("imgPet")
                

               
                image.title = file.name;

                
                reader.onload = function(event){
                    image.src =  event.target.result;
                   
                };

                reader.readAsDataURL(file);
                
            }

         

          
        })
  


// добавление записи
        this.button.addEventListener("click",(event)=>{
            
            event.preventDefault();
            let container = [];
         

            this.inputs.forEach((item,index)=>{
                
                if(item.value){
                    container.push(item.value)
                }
                // вставка картинки
                if(item.type==="file" && item.files[0]!==undefined){
                  
                let newImage = `<image class="imgPet" src="${image.src}">`;
                parent[5].innerHTML = newImage;
                container[container.length-1] = newImage;
                   
                    
                } 
                if(item.type ==="file" && item.files[0]===undefined) {
                    container[container.length] ="Картинка не задана";
    
                }

               
            })
            
           
           
           
            const person = new PersPoint(container).toHTML();
        // преобразование  строки в dom элемент
           let domObj = new DOMParser().parseFromString(person,"text/html") // превращаем строку в dom объект
            // добавление корзины
         domObj.querySelector(".person").firstChild.appendChild(domBasket);


        const devPerson = domObj.querySelector(".table");
          

           const users = document.querySelector(".users");
       
    if(localStorage.length === 0){
        // devPerson.outerHTML преобразование html в строку
        
        devPerson.setAttribute("data-id",": "+0)
        // анимация + вставка

        openAnimModal(devPerson,users,-117,0);
      
       
       
       
        // users.insertAdjacentHTML('beforeend', devPerson.outerHTML)
        localStorage.setItem("id: "+ 0,JSON.stringify(container))

            

            container = []  // освобоэжение контейнера

    
      
} else if (localStorage.length>0){
    let keysLS = Object.keys(localStorage);
      
    devPerson.setAttribute("data-id",": "+maxId(keysLS));
    openAnimModal(devPerson,users,-117,0);
//  users.insertAdjacentHTML('beforeend', devPerson.outerHTML)
        
        // this.location.insertAdjacentHTML('beforeend', devPerson.outerHTML )
       
      
     
     
        for(let key in  keysLS){
             
       
        localStorage.setItem("id: "+maxId(keysLS),JSON.stringify(container))
                 
                    
              
        }
        container = [] 
    //         for(let val of inputs){
    //     val.value = "";     // очистка инпутов
    //  }
      
}
            this.addClassTable()
           
            
       
            
        })  // клик добавление записи

            //getter
        this.rePlayNote
     
        
    }



    installIcons(){
        
        // Basket
            const $elements = document.querySelectorAll(".person");
            const div = document.createElement("div");
            
          
            div.classList.add("icons")
              
            
            if($elements.length>0){
                for(let i =0; i<=$elements.length-1;i++){
                    $elements[i].firstChild.appendChild(div)
                    $elements[i].firstChild.insertAdjacentHTML("beforeend",setIcon(basket,pencil,saver))
        
            
            }

            }

            //Pencil

            
           
    }

    removeNote(){
        const home = document.querySelector(".users")
       
      
        // деленирование событий для обработки динамисческих корзин
        document.addEventListener('click',function(event){
            if(event.target && event.target.classList.contains('icon__basket')){

            
                let child = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;// получаемудаляемый элемент
              
          
               

            let key = child.dataset.id;
                
               
             localStorage.removeItem(key)

            // анимация удалния
            closeAnimModal(child,home)
                // 
            }
        });


       
        
        
        
    }


    

    changeNote(){


        // document.addEventListener("mousedown",(event)=>{
        //     if(event.target.classList.contains("icon__pencil") &&
        //     event.target.hasAttribute("disabled",true)===false){

        //         let sourceReadyImg = event.target.parentNode.parentNode.parentNode.children[5].children[0].children[0].src
        //         console.log(sourceReadyImg)
        //     }
        // })
        

     

        document.addEventListener("click",(event)=>{
     
            
            if(event.target.classList.contains("icon__pencil") &&
             event.target.hasAttribute("disabled",true)===false){
                let sourceReadyImg; // если есть старая картинка, создается контейнер
                let ReadyImg =  event.target.parentNode.parentNode.parentNode.children[5].children[0].children[0]; // картинка или то,что ей должно быть
               if(ReadyImg && ReadyImg !==undefined && ReadyImg.hasAttribute("src")){
                 sourceReadyImg = ReadyImg.src
              
                console.log(sourceReadyImg)
               } 
  
                // I - input
           
                // включение кнопкни сохранить

                const button_save = event.target.parentNode.children[2];
                button_save.disabled = false
                button_save.style.opacity = 1

                // выключение кнопки изменить
                const button_change = event.target.parentNode.children[1]
                
                button_change.setAttribute("disabled",true)
                button_change.style.opacity = 0.5
              

               
                
                   let trPerson = event.target.parentNode.parentNode.parentNode
                 
               
               
               
               
              
                // opening text input
                let nodeTD = event.target.closest("table").querySelectorAll(".td__content");
                
                const array =Array.from(nodeTD)
                array.push(td)
               for(let i=0;i<=array.length-1;i++){
                  
                    array[i].innerHTML = inputPers("", array[i].textContent,"")
                  
                
               
                   
               }

         // изменение атрибутов инпутов
        nodeTD[2].childNodes[0].setAttribute("type","date");   
          nodeTD[5].childNodes[0].setAttribute("type","file");
          
        // console.log( nodeTD[5].childNodes[0].files[0])
              
               



               if( trPerson.querySelectorAll(".table__input")<=6){
               trPerson.insertAdjacentHTML("beforeend",array[5])
                
               }


               // тело записи
                
               let parent = event.target.closest("table").querySelectorAll(".td__content")
               
               let table = event.target.closest("table")   

               let inputPicture = parent[5].childNodes[0]

               console.log(inputPicture)

            //    inputPicture.setAttribute("onchange","onFileSelected(event)")

                let image;
                image = document.createElement("img");
                
                image.classList.add("imgPet")
               
 // сохранение картинки поумолчанию 

                if( sourceReadyImg!==undefined && image!==undefined){
                    image.setAttribute("src",sourceReadyImg)
                }  
                    
                
               // получить путь картинки
               inputPicture.addEventListener("change",(event)=>{

                let file = event.target.files[0];

                console.log(file)
                let reader = new FileReader();
               
                 
               

                image.title = file.name;
              
                
                
                reader.onload = function(event){
                   
                        image.src =  event.target.result;
                        // console.log(image.src)
                   
                    
                   
                };// /reader

                reader.readAsDataURL(file);
                
             })

            

               
         // II - save data

        button_save.addEventListener("click",()=>{

            
            
           
           if(button_save.disabled ===false){

            // editing buttons
      
            button_save.disabled = true;
            button_save.style.opacity = 0.5;
            button_change.removeAttribute("disabled",true)
            button_change.style.opacity = 1
            // savings

            
            let container = [];
           
            let idTable;
            // idTable = "id"+table.dataset.id
            
            parent.forEach(divTD=>{
                          
                if(divTD.firstChild.value){
                          
                                container.push(divTD.firstChild.value)
                                divTD.textContent =  divTD.firstChild.value
                               
                            
                }
            }) 

            
            
              if(image!==undefined){
                  parent[5].innerHTML="";
                parent[5].appendChild(image);
               
                
                
               

                container[5] = `<image class="imgPet" src="${parent[5].childNodes[0].src}">`
                
            } else{
                 
                container[5] = "Картинка не задана"
            }
            
            // добавить изменение в память LS

            idTable =table.dataset.id
            
            localStorage[idTable] = JSON.stringify(container)
            // localStorage.setItem(idTable,JSON.stringify(container))

          }
           
            })

        }
          
    })

}

   

    addClassTable(){

        let  parent = document.querySelector(".field__entering");
        for(let i = 0; i<=parent.children.length-1;i++){

            if(parent.children[i].classList.contains("table")){
               
                parent.children[i].classList.add("table__enter") 
            
                
            }
        }

    }

    get rePlayNote(){
        let box = []
        let keys = Object.keys(localStorage);
       keys.sort() // сортировка ключей по возрастанию
        for(let j=0; j<=localStorage.length-1;j++){
    
            box.push(
                JSON.parse(localStorage.getItem(keys[j]))
                
    )
 
    }
    
    
   


   

    //
        for(let k in box){
          
            box[k] = new PersPoint(box[k]).toHTML()
            box[k]  = new DOMParser().parseFromString(box[k],"text/html") // превращаем строку в dom объект
            

            box[k] = box[k].querySelector("table")
          
            box[k].setAttribute("data-id",keys[k])  //добавляем к data атрибут получая его из local Storage

           box[k] = box[k].outerHTML // превращаем в строку dom

            
     

       
    }
          
           return users.insertAdjacentHTML('beforeend',box.join(""));


    }




    set clearLS(className){

        const button = document.createElement("button")
        button.classList.add(className)
        const buttons__entering = document.querySelector(".buttons__entering");
        buttons__entering.append(button)
        // this.location.prepend(button)
        button.innerText = "Сброс всех данных(+LS)"
        // console.log(button)

        button.addEventListener("click",()=>{
            
            
            clearField("table__enter")
            
        
            
        })

  // возможно реализуй очитску LS
    }


}


const data = new Data(".field__entering","#data-btn",".table__input")




