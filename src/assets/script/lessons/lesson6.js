// // Урок 6. JavaScript. Объекты с Object.create. Что такое getters, setters
// // https://www.youtube.com/watch?v=cS6nTVNzOPw&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=6
// //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
// //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/create
// // Object.create()
// //Object.defineProperty() дескрипторы


// const thing ={
//     birthday:"13.06",
//     alive:undefined

// }

// // итерация по ключам объектапри таком создании объекта:эти ключине не войдут в цикл , нужны дескрипторы
// // чтобы ключи вошли в цикл используй  enumerable:true

// /*
// writable false =данный оъект нельзяизменять
// enumerable  false = свойтсване видны через итерации цикла
// configurable  false - нельяз удалить ключ объекта
// 1 параметр - прототип нового созданного объекта person
// */
// const person1 =Object.create({
//     calculateAge(){
//         console.log('Age: ', new Date().getFullYear()-this.birthYear);
//     }
// },{
//     name:{

//         value:'Grigory',
//        enumerable:true,
//        writable:true,
//        configurable:true
//     },
//     birthYear:{
//         value:1993,
//         enumerable:false,
//         writable:false,
//         configurable:false
//     },
//     age:{
        
//         get(){
//             return new Date().getFullYear()-this.birthYear
//         }
//         ,
//         set(value){
//             document.body.style.background ="red"
//                 console.log("set age", value)
//         }
//     }
// })


// // person1.name ="Anrew" // НЕДАСТ  результата в таком объекте нужен   writable:true
// // delete person1.name
// // delete person1.birthYear

// // hasOwnProperty(key)  исключает перебор прототипа объекта 
// //1 параметр - прототип нового созданного объекта person
// // for(let key in person1){
// //     if(person1.hasOwnProperty(key)){
// //         // console.log("Key: ",key,person1[key])
// //     }
    
// // }

// // person1.age = "sdfdfdf";

// // console.log(person1)
// // console.log(thing)