// рендеринг - перенос html в само dom дерево
import {Sidebar} from './sidebar'


// добавление на сайт в дом дерево  
export class Site {
    constructor(selector){
        this.$el = document.querySelector(selector)

    }

    render(model){
        this.$el.innerHTML =""// очистка шаблона
        model.forEach(point =>{
   
    
           
                this.$el.insertAdjacentHTML("beforeend",point.toHTML());
           
        })

    }
}