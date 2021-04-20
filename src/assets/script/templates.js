import {row,col,tr,td,imgLogo,css} from './utils'

// functions titles

function title(point) {

    const {tag = "h1",styles} = point.options// деструктуризация
    // const tag = point.options.tag ?? 'h1'; значение по умолчанию
    // const styles = point.options.styles;
   
    return  row(col(`<${tag}>${point.value}</${tag}>`),css(styles))
 }
 
 function intro(point) {

    // const {styles, styles1} = point.options // деструктуризация
    


     return row(col(`
     <p>${point.value}</p>
     <p>${point.value1}</p>`,css(point.options.styles)),css(point.options.styles1),"intro")
 
 }
 
 // header
 function header(point) {

    

     const content = point.value.map(td).join("")


     // item=>td(item) можно записать как просто td референс > point.value.map(td)
 
     return  tr(content,"header",css(point.options.styles))
 
 }
// persons
 function person(point) {

      point.options = {
        styles:{"background": "linear-gradient(90deg, #aea4e3, #d3ffe8)"},
        styles1:{"background": "linear-gradient(85deg, #fb63f9, #c2e534)"}
    }

    const content = point.value.map(item=>td(item))  // создание массива
    // my editions to person

    return   tr(content.join(""),"person",css(point.options.styles))// вставили  массив в таблицу


}
 
  function image(point) {

    const {imageStyles:is,alt="",styles} = point.options
      // console.log(point.options)
    return imgLogo(`<image class="logo" src="${point.value}" alt="${alt}" style="${css(is)}"/>`,css(styles))
 
 
 }


 export const templates ={
     title,
     intro,
     header,
     person,
     image
 }


 

