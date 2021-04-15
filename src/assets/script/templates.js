import {row,col,tr,td,imgLogo} from './utils'

// functions titles

function title(point) {
    return  row(col(`<h1>${point.value}</h1>`))
 }
 
 function intro(point) {
     return row(col(`<p>${point.value}</p>`))
 
 }
 
 // header
 function header(point) {
     const content = point.value.map(item=>td(item))
 
 
     return  tr(content,"header")
 
 }
// persons
 function person(point) {
    const content = point.value.map(item=>td(item))  // создание массива


    return   tr(content,"person")// вставили  массив в таблицу

}
 
  function image(point) {
    return imgLogo(point.value)
 
 
 }


 export const templates ={
     title,
     intro,
     header,
     person,
     image
 }