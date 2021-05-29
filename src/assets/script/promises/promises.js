
import {TitlePoint,IntroPoint,ImgPoint,HeadPoint,PersPoint,InputPers,PetPicture} from '../classes/points'
import {names} from "../model"














// const context = getValues.bind(note)()


// console.log(note)

// console.log(new Map().keys(note))


const location = document.getElementById("site");











 let parcel = [];

const btn = document.getElementById("data-btn");






// Работа с асинхронностью JS
//   Асинхронность. https://www.youtube.com/watch?v=vIZs5tH-HGQ&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=4&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD
// Window https://developer.mozilla.org/ru/docs/Web/API/Window
//  Promise https://www.youtube.com/watch?v=1idOY3C1gYU&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=5&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD



// setTimeout(function(){
//     const btnSubmit = document.getElementById("data-btn")
//     const inputNotes = document.querySelectorAll(".table__input")
//     // console.log(btnSubmit)

//     const array = [btnSubmit,inputNotes]

//    console.log(array)
   
   
   
//    return array
    
            

    

    
// },0)


const p =new Promise((resolve,reject)=>{
    setTimeout(()=>{

        

        // console.log("Preparing data")
        const btnSubmit = document.getElementById("data-btn")
         

        
         
         
         
         
         
         
        //  console.log(array) 
      
    //    return array
         resolve(btnSubmit)

    },0)
})




let box;

p.then((data)=>{
   return new Promise((resolve,reject)=>{
       setTimeout(()=>{
            
    box= data
        
            resolve(box)
       
    
    
    },0)
   })

// promise2.then(note=>{

//     console.log("Got",note)

// })

}).then(getBox=>{

    return new Promise((resolve,reject)=>{
        
            location.append(getBox)

            const inputs = document.querySelectorAll(".table__input")

            

            let container=[];

            

            getBox.addEventListener("click",(event)=>{
                event.preventDefault()

                
                

              
               
                inputs.forEach(item=>{
                    
                    if(item.type){
                        container.push(item.value+"^")

                        if(item.type === "file" && item.files[0]){

                            const fileImg = item.files[0];

                            const objURLImg = window.URL.createObjectURL(fileImg );
                            
                            const addPhoto = new PetPicture(objURLImg).toHTML()


                           
                            container[container.length-1] = addPhoto;
                           
                              
                            
                            

                            
                        }

                    }
                    
                   

                    
                    
                })

              
                const person = new PersPoint(container).toHTML()
                console.log(container)
                
                // location.insertAdjacentElement('afterbegin',person)
            //    location.innerHTML = person
            if(person) {
                location.insertAdjacentHTML('beforeend',person)
               
               
            }
              
           
            })

           


            
           

            
            
             
            
            localStorage.setItem("client",JSON.stringify(container))
          
            resolve(names)



        
    })
    
     
})


.then(data=>{

    const objClient = {}

    Object.assign(objClient,data)
    
    // console.log(objClient)
})
// .catch(err=> console.error("Error: ", err))
// .finally(()=>{  console.log("Finally")})



// const sleep = ms =>{
//     return new Promise(resolve => setTimeout(()=>resolve(),ms))


// }


// sleep(2000).then(()=>console.log("After 2 sec"))
// sleep(3000).then(()=>console.log("After 3 sec"))

// Promise.all([sleep(2000),sleep(5000)],p)
// .then(()=>{
//     console.log("All promises")
// })  // выполнится после выполнения всех промисов

// Promise.race([sleep(2000),sleep(5000)],p)
// .then(()=>{
//     // console.log("Race promises") // данная строка появится при первом промисе
// }) 
    













           

    

    

    

   