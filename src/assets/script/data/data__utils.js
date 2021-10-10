


export function clearField(selectorClass){
       
//     let child = document.querySelectorAll("."+selectorClass);
//    let parent = document.querySelector('.field__entering')
   
   
//    for(let i =0; i<=child.length-1;i++){
//     parent.removeChild(child[i])
//    }  

// упращено
   window.location.reload(); // обновление страницы
   localStorage.clear();// очитска LS
   

}

// переделать функции в одну!! + найти сохранить

export function setIcon(src1,src2,src3){

   return `<div  class="wrapp__icon">
               <img  title="удалить запись" class="icon icon__basket"  src="${src1}">
               <img  title="изменить запись" class="icon icon__pencil" src="${src2}">
               <img  title="сохранить запись" class="icon icon__saver" src="${src3}">
          </div>`


}






export function maxId(arr){



   let regex =/\d+/;
   
   
   let newArr = arr.map(item=>{
   
       return parseInt(item.match(regex))
   })
   
   let maxNum =  Math.max.apply(null, newArr ); // берем максимальное числоиз массива
   
   return ++maxNum
   
   
   
   }



