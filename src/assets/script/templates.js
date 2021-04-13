

// functions

function title(point) {
    return ` <div class="row">
                 <div class="col-sm">
                     <h1>${point.value}</h1>
                 </div>
        </div>`
 }
 
 function intro(point) {
     return `
         <div class="row">
                 <div class="col-sm">
                     <p>${point.value}</p>
                 </div>
             </div>
         `
 
 }
 
 // header
 function header(point) {
     const content = point.value.map(item=>`<td class="col-sm">${item}</td>`)
 
 
     return  `<table class="table"><tr class="row header">${content.join("")}</tr></table>`
 
 }
// persons
 function person(point) {
    const content = point.value.map(item=>`<td class="col-sm">${item}</td>`)


    return  `<table class="table"><tr class="row person">${content.join("")}</tr></table>`

}
 
  function image(point) {
    return ` <div class="row">
                 <div class="logo wrapper">
                     <image  class="logo" src=${point.value}>
                 </div>
             </div>
    
    `
 
 
 }


 export const templates ={
     title,
     intro,
     header,
     person,
     image
 }