// рендеринг - перенос html в само dom дерево


export class Site {
    constructor(selector){
        this.$el = document.querySelector(selector)

    }

    render(model){

        model.forEach(point =>{
   
    
           
                this.$el.insertAdjacentHTML("beforeend",point.toHTML());
            
        })

    }
}