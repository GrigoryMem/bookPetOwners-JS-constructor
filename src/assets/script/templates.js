import {row,col,tr,td,imgLogo,css} from './utils'

// functions titles

function title(point) {

    const {tag = "h1",styles} = point.options// деструктуризация
    // const tag = point.options.tag ?? 'h1'; значение по умолчанию
    // const styles = point.options.styles;
   
    return  row(col(`<${tag}>${point.value}</${tag}>`),css(styles))
 }
 
 function intro(point) {

    const {styles, styles1} = point.options // деструктуризация
    


     return row(col(`
     <p>${point.value}</p>
     <p>${point.value1}</p>`,css(styles)),css(styles1),"intro")
 
 }
 
 // header
 function header(point) {

    const styles = point.options.styles

    console.log(styles)

     const content = point.value.map(td).join("")


     // item=>td(item) можно записать как просто td референс > point.value.map(td)
 
     return  tr(content,"header",css(styles))
 
 }
// persons
 function person(point) {
    const content = point.value.map(item=>td(item))  // создание массива


    return   tr(content.join(""),"person")// вставили  массив в таблицу

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