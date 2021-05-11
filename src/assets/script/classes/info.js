


export class GetInfo{
        constructor(selector){
            
            this.element = document.querySelector(selector);
        }


        catchVal(){

            
           if(this.element.value!==null && this.element.value!=="" ) 

           console.log(this.element.value)


        }
    }


    export class GetNote{
        constructor(selector){
            this.element = document.querySelectorAll(selector)


        }


        toSave(){

            console.log(this.element.value)
            let box =[]
            const btnSubmit = document.getElementById("data-btn");
            btnSubmit.addEventListener("click",(event)=>{

                event.preventDefault();
                this.element.forEach((item)=>{
                    if(item.value!==null && item.value!=="" && item.value!==undefined
                    || item.value.length!==0){

                        box.push(item.value);

                        console.log(box)
         
         
                 }


                 



                })

               





            })

        }



    }


    

    

    

   