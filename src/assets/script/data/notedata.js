import{PersPoint,PetPicture} from '../classes/points';
import{clearField} from './data__utils'
// рефокторинг



class Data {
    constructor(selectorLoc,selectorbtn,inputs){
        this.location = document.querySelector(selectorLoc)
        this.button = document.querySelector(selectorbtn)
        this.inputs = document.querySelectorAll(inputs)
        
        this.addNote()
        this.clearLS = "timebtn"
        


    }

    addNote(){

        this.button.addEventListener("click",(event)=>{
            event.preventDefault();
            let container = [];

            this.inputs.forEach(item=>{
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

            const person = new PersPoint(container).toHTML()
           
    
    if(localStorage.length === 0){
        
        this.location.insertAdjacentHTML('beforeend', person )
        
            localStorage.setItem("id: "+ 0,JSON.stringify(container))

            container = []  // освобоэжение контейнера

    //   for(let val of inputs){
    //     val.value = "";     // очистка инпутов
    //  }
      
} else{

        this.location.insertAdjacentHTML('beforeend', person )
        let keysLS = Object.keys(localStorage);

        for(let key in  keysLS){

            localStorage.setItem("id: "+keysLS.length,JSON.stringify(container))
        }
        container = [] 
    //         for(let val of inputs){
    //     val.value = "";     // очистка инпутов
    //  }
      
}
            this.addClassTable()

        })

            //getter
        this.saveNote 
        
    }



    removeNote(){

    }


    changeNote(){

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
    }
          
           return this.location.insertAdjacentHTML('beforeend',box.join(""));


    }




    set clearLS(className){

        const button = document.createElement("button")
        button.classList.add(className)
        this.location.append(button)
        button.innerText = "Сброс всех данных(+LS)"
        console.log(button)

        button.addEventListener("click",()=>{
            
            
            clearField("table__enter")
            
        
            
        })

  // возможно реализуй очитску LS
    }


}


const data = new Data(".field__entering","#data-btn",".table__input")
// console.log(data)





//  старые записи


// const location =document.querySelector("#site");

// const button = document.getElementById("data-btn");

// const inputs = document.querySelectorAll(".table__input");
// let container = []



// button.addEventListener("click",(event)=>{
//     event.preventDefault();

//     inputs.forEach(item=>{
//             if(item.value !=="" ){
//                container.push(item.value)
              

//             if(item.type==="file" && item.files[0]){

//                 const fileImg =item.files[0]; // имя файла картинки
                
//                 const objURLImg = window.URL.createObjectURL(fileImg) // путь файла картинки
                

//                 const addPhoto = new PetPicture(objURLImg ).toHTML();

//                 container[container.length-1] = addPhoto;

                
              
//             }
//             }
//     })

//     const person = new PersPoint(container).toHTML()
    
//     if(localStorage.length === 0){
        
//         location.insertAdjacentHTML('beforeend', person )
        
//             localStorage.setItem("id: "+ 0,JSON.stringify(container))

//             container = []  // освобоэжение контейнера

//     //   for(let val of inputs){
//     //     val.value = "";     // очистка инпутов
//     //  }
      
// } else{

//         location.insertAdjacentHTML('beforeend', person )
//         let keysLS = Object.keys(localStorage);

//         for(let key in  keysLS){

//             localStorage.setItem("id: "+keysLS.length,JSON.stringify(container))
//         }
//         container = [] 
//     //         for(let val of inputs){
//     //     val.value = "";     // очистка инпутов
//     //  }
      
// }






      
// })


// очистка LS старые записи

// const clearLS = document.querySelector(".timebtn");

// clearLS.addEventListener("click",()=>{
//     localStorage.clear();

    

//     // for(let i =6; i<= location.length-1;i++){
       
//     // }
// })







// toNote();







// function toNote(){

//     let box = []
//     let keys = Object.keys(localStorage);
//     for(let j=0; j<=localStorage.length-1;j++){

//         box.push(
//             JSON.parse(localStorage.getItem(keys[j]))
            
// )
// }

//     for(let k in box){

//         box[k] = new PersPoint(box[k]).toHTML()
// }
      
//        return location.insertAdjacentHTML('beforeend',box.join(""));

// }






