import {Site}  from './site'
 import {Sidebar} from './sidebar'



export class App{
    constructor(model){
        this.model = model
        this.init()
    }

    init(){
        const site  = new Site("#site"); // создаем сайт


site.render(this.model)  // рендеринг - перенос html в само dom дерево (forech modeljs через класс)
//добавляем рендер

// после #admin добавление изменений в сайт через call back
const updateCallback = newPoint => {

    this.model.push(newPoint) // положить блок из сидебара в конец модели
    site.render(this.model)  // обновление данных в дом дереве

}  // определяем  функцию которая следит за обновлением



// new Sidebar("#admin",  updateCallback)  // отключили сидебар

    }    
}