import {model} from './model'

// import {templates} from './templates'
// import '../css/main.css'
 import '../scss/main.scss'
 import {Site}  from './classes/site'
 import {Sidebar,Test,FontStyle} from './classes/sidebar'
 


 


const site  = new Site("#site");


site.render(model)  // рендеринг - перенос html в само dom дерево

const sidebar = new Sidebar("#admin")


sidebar.admin // getter
// sidebar.myanswer  setter
// // mine

// const test =new Test(".test")

// test.toStyle()

// const test2 = new FontStyle(".test2")

// test2.toStyle()

// test2.toFont()




// model.forEach(point =>{
   
    
//     if(point){
//         site.insertAdjacentHTML("beforeend",point.toHTML());
//     }

// })

    // if(point.type === "title"){
    //     content = title(point);
    // } else if(point.type==="intro"){
    //     content = intro(point);

    // } else if(point.type === "header" || point.type ==="person") {

    //     content = header(point)


    // } else if(point.type ==="person") {

    //     content = person(point)


    // } else if(point.type === "image") {

    //     content = image(point)


    // }


   


// })



