// анимация на удаление записи


export function closeAnimModal(child,home){
    setTimeout(()=>{
        // доработать
        child.style.zIndex = "1000";
        child.style.transform= 'translateY(-25px)';
        child.previousElementSibling.style.transform = "translateY(-50px)"
        // console.log(child);
        child.style.opacity = "0";
        console.log(child.previousElementSibling)
        
         setTimeout(()=>{
            child.previousElementSibling.style.transform = "translateY(25px)"
            home.removeChild(child)
           
         },900)
         
        },950)
            // 
        }
   
//анимация на добавление записи


export function openAnimModal(devPerson,users,sizePx1,sizePx2){
    // параметры и размеры анимации?
    // возраст?
    //адрес?карта?
    //сортировки и фильтр
// больше пород из массива

   setTimeout(()=>{
   
    devPerson.style.zIndex = 1;
console.log("hello world");
        // users.insertAdjacentHTML('beforeend', devPerson.outerHTML);
        devPerson.style.transform = `translateY(${sizePx1}px)`;
        devPerson.style.opacity = "0";
        users.append(devPerson);
        

       
        setTimeout(()=>{

            devPerson.style.opacity = "1";
            devPerson.style.transform = `translateY(${sizePx2}px)`;
            setTimeout(()=>{
                
                window.location.reload(); // обновляем страницу
            },1000)
           
        },650)
    },600)

    

    // users.insertAdjacentHTML('beforeend', devPerson.outerHTML);

   
   
}       
        
       
            
        


