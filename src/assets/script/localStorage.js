const myNumber =42;


// localStorage.removeItem("number")  // удаление значение из LS
// // console.log(localStorage.getItem('number')); // получить из LS
// localStorage.setItem('number',myNumber.toString()) ;// передать в LS  1 -ключь 2 - значение
// // console.log(localStorage.getItem('number'))
// //LS может работать только строками
// localStorage.clear() // очистить LS


// const object ={
//     name:"Andrew",
//     age:29
// }

// localStorage.setItem("person",JSON.stringify(object))

// //JSON.stringify   позволяет корректно хранить встроке данные объекта
// //JSON.parse() -обратное действие методу  stringify
// // console.log(localStorage.getItem("person"));

// // import {example} from './model'

// // localStorage.setItem("customer",JSON.stringify(example))

// const raw =localStorage.getItem('person');
// const person = JSON.parse(raw)  // получаем спомощью  этого объект из LS
// person.name = 'vladilen';


// console.log(person)
// =================
// налюбое добавление элемента
// window.addEventListener("storage",event=>{
//     console.log(event)
// })

// if(localStorage.getItem("client")!== null){
//     console.log(true);
// }