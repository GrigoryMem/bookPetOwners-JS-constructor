


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


export function setBasket(src){

   return `<div title="удалить запись" class="wrapp__basket">
            <img  class="basket" src="${src}">
   </div>`


}







