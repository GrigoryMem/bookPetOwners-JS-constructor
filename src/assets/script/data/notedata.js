import{PersPoint,PetPicture} from '../classes/points'
import{clearField, setBasket} from './data__utils'
import{basket} from '../model'
// рефокторинг

let parserBaket = new DOMParser().parseFromString(setBasket(basket),"text/html") 
let domBasket = parserBaket.querySelector(".wrapp__basket")





class Data {
    constructor(selectorLoc,selectorbtn,inputs,allBaskets){
        this.location = document.querySelector(selectorLoc)
        this.button = document.querySelector(selectorbtn)
        this.inputs = document.querySelectorAll(inputs)
       
        
        this.addNote()
        this.clearLS = "timebtn"
        this.installBasket()
        this.removeNote()
        this.sortElement()
        // this.installBasket()
       
        


    }

    addNote(){
        

        this.button.addEventListener("click",(event)=>{
            
            event.preventDefault();
            let container = [];
         

            this.inputs.forEach((item,index)=>{
                
                if(item.value!==""){
                    container.push(item.value)
                }
                if(item.type==="file" && item.files[0]){
                    const fileImg =item.files[0]; // имя файла картинки
                
                    const objURLImg = window.URL.createObjectURL(fileImg) // путь файла картинки
                    
                    const addPhoto = new PetPicture(objURLImg ).toHTML();
    
                    container[container.length-1] = addPhoto;
                   
                    
                }
            })
            
            // container.push(this.installBasket());  добавление корзины  как лишний столбец
           
           
            const person = new PersPoint(container).toHTML()
        // преобразование  строки в dom элемент
           let domObj = new DOMParser().parseFromString(person,"text/html") // превращаем строку в dom объект
            // добавление корзины
         domObj.querySelector(".person").firstChild.appendChild(domBasket)


        const devPerson = domObj.querySelector(".table")
           
       
    if(localStorage.length === 0){
        // devPerson.outerHTML преобразование html в строку
        
        devPerson.setAttribute("data-id",": "+0)
       console.log( devPerson.dataset)
        this.location.insertAdjacentHTML('beforeend', devPerson.outerHTML)

  
        
      

            localStorage.setItem("id: "+ 0,JSON.stringify(container))

            

            container = []  // освобоэжение контейнера

    //   for(let val of inputs){
    //     val.value = "";     // очистка инпутов
    //  }
      
} else if (localStorage.length>0){
    let keysLS = Object.keys(localStorage);
      
    devPerson.setAttribute("data-id",": "+sortId(keysLS))
    
        this.location.insertAdjacentHTML('beforeend', devPerson.outerHTML )
       
      
     
        // keysLS = sortId(keysLS)
        // console.log(sortId(keysLS))
        for(let key in  keysLS){
             
       
        localStorage.setItem("id: "+sortId(keysLS),JSON.stringify(container))
                 
                    
              
        }
        container = [] 
    //         for(let val of inputs){
    //     val.value = "";     // очистка инпутов
    //  }
      
}
            this.addClassTable()
           
          
            // window.location.reload(); // обновляем страницу
        })  // клик добавление записи

            //getter
        this.saveNote 
       
        
        
    }



    installBasket(){
        
        
            const $elements = document.querySelectorAll(".person");
        
            
            if($elements.length>2){
                for(let i =2; i<=$elements.length-1;i++){
                   
                    $elements[i].firstChild.insertAdjacentHTML("beforeend",setBasket(basket))
            
            }

            }
           
    }

    removeNote(){
        const home = document.querySelector(".field__entering")
       
      
        // деленирование событий для обработки динамисческих корзин
        document.addEventListener('click',function(event){
            if(event.target && event.target.classList.contains('basket')){

                // let child = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                // console.log(child)
                let child = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;// получаемудаляемый элемент
                // console.log(event.layerX)
                // console.log(event.target)
                // console.log(event.target.className)
               
                // home.removeChild(child)
                
               

            let key = "id"+child.dataset.id;
             localStorage.removeItem(key)
             home.removeChild(child)
                
                
            }
        });


        // let regex =/\d+/;  // регулярное выражение дляпоиска числа number
        //         let key =  parseInt(localStorage.key(index).match(regex))
        
        
        
        
        
        
        
        
        
        
        
        
       
       
        
        // baskets.forEach((item,index)=>{
        //     item.addEventListener("click",()=>{
               
        //         item.src.onload = function(){
               
        //         let regex =/\d+/;
        //         let key =  parseInt(localStorage.key(index).match(regex))
        //         console.log(key)
        //         home.removeChild(child)
        //         localStorage.removeItem("id: "+key)
        //         }
                
        //         // window.location.reload(); // обновляем страницу
        //     })

            
        // })

        

       
    
    }

    changeNote(){

    }

    sortElement(){
        let keys = Object.keys(localStorage);
        const savedNotes = document.querySelectorAll(".table")
        console.log(savedNotes)
        const arrKeys = []
        const newArr =[]
        for(let p=2;p<= savedNotes.length-1;p++){
            if(localStorage.key(savedNotes[p])!==null){
                arrKeys.push(localStorage.key(p))
            }
            
        }

        for(let item in arrKeys){
            if(item!==null){
                newArr.push(item)
            }
        }
        // let regex =/\d+/;
        // let key =  parseInt(localStorage.key(index).match(regex))
console.log(arrKeys)
      return newArr


    }

    addClassTable(){

        let  parent = document.querySelector(".field__entering");
        for(let i = 0; i<=parent.children.length-1;i++){

            if(parent.children[i].classList.contains("table")){
               
                parent.children[i].classList.add("table__enter") 
            
                
            }
        }

    }

    get saveNote(){
        let box = []
        let keys = Object.keys(localStorage);
        for(let j=0; j<=localStorage.length-1;j++){
    
            box.push(
                JSON.parse(localStorage.getItem(keys[j]))
                
    )
    }
    
        for(let k in box){
    
            box[k] = new PersPoint(box[k]).toHTML()
            box[k]  = new DOMParser().parseFromString(box[k],"text/html") // превращаем строку в dom объект
            

            box[k] = box[k].querySelector("table")
            box[k].setAttribute("data-id",": "+k)  //добавляемк data атрибут

           box[k] = box[k].outerHTML // превращаем в строку dom

            
     

       
    }
          
           return this.location.insertAdjacentHTML('beforeend',box.join(""));


    }




    set clearLS(className){

        const button = document.createElement("button")
        button.classList.add(className)
        this.location.append(button)
        button.innerText = "Сброс всех данных(+LS)"
        // console.log(button)

        button.addEventListener("click",()=>{
            
            
            clearField("table__enter")
            
        
            
        })

  // возможно реализуй очитску LS
    }


}


const data = new Data(".field__entering","#data-btn",".table__input")

function sortId(arr){



let regex =/\d+/;


let newArr = arr.map(item=>{

    return parseInt(item.match(regex))
})

let maxNum =  Math.max.apply(null, newArr ); // берем максимальное числоиз массива

return ++maxNum



}



