
import {TitlePoint,IntroPoint,ImgPoint,HeadPoint,PersPoint,InputPers,PetPicture} from './points'




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

        

        console.log("Preparing data")
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
        setTimeout(()=>{
            location.append(getBox)

            const inputs = document.querySelectorAll(".table__input")

            

            

            

            getBox.addEventListener("click",(event)=>{
                event.preventDefault()

                


              
                let box=[];
                inputs.forEach(item=>{
                    
                    if(item.type){
                        box.push(item.value)

                        if(item.type === "file" &&  item.files[0]){

                            const fileImg = item.files[0];

                            const objURLImg = window.URL.createObjectURL(fileImg );
                            
                            const addPhoto = new PetPicture(objURLImg).toHTML()


                           
                                box[box.length-1] = addPhoto
                           
                         

                            

                            
                        }

                    }
                    
                   

                    
                    
                })

                
                const person = new PersPoint(box).toHTML()
                // location.insertAdjacentElement('afterbegin',person)
            //    location.innerHTML = person
            if(person) {
                location.insertAdjacentHTML('beforeend',person)

               
            }
              
           
            })


            
           

            
            
            
            
            
           
            resolve(person)



        },0)
    })
    
     
}).then(container=>{
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
            
         
           
            
          
        
                
               
            
            // getPhoto.addEventListener
            

        },0)
    })



})













           

    

    

    

   