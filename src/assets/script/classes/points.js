// создание класса объекта
import{row,col,td,tr,imgLogo,imgPet,css,inputPers,formAddPers} from '../utils'


export class PointClass{
    constructor(value, options){
        
        this.value = value
        this.options = options
    }

    toHTML(){
        throw new Error('Метод toHTML должен быть реазлизован') // если в наследуемых классах его не будет, то будет выдаваться эта ошибка
    }
}





 


export class PointClassNew{
    constructor(value, value1, options){
      
        this.value = value
        this.value1 = value1
        this.options = options
    }

    toHTML(){
        throw new Error('Метод toHTML должен быть реазлизован') // если в наследуемых классах его не будет, то будет выдаваться эта ошибка
    }
}


export class TitlePoint extends PointClass{
    constructor(value,options){
        super(value,options)
    }
    toHTML(){
        const {tag = "h1",styles} = this.options
        
        return  row(col(`<${tag}>${this.value}</${tag}>`),css(styles))
        // деструктуризация
        // const tag = point.options.tag ?? 'h1'; значение по умолчанию
        // const styles = point.options.styles;
       
     

    }
}

export class IntroPoint extends PointClassNew{
    constructor(value,value1,options){
        super(value,value1,options)
    }
    toHTML(){
        return row(col(`
        <p>${this.value}</p>
        <p>${this.value1}</p>`,css(this.options.styles)),css(this.options.styles1),"intro")
    }
}


export class ImgPoint extends PointClass{
    constructor(value,options){
        super(value,options)
    }
    toHTML(){
        const {imageStyles:is,alt="",styles} = this.options
       
        
      
      return imgLogo(`<image class="logo" src="${this.value}" alt="${alt}" style="${css(is)}"/>`,css(styles))
    }

   
}

export class PetPicture{
    constructor(value){
       this.value = value;
    }

    toHTML(){
        return `<image class="pet__picture imgPet" src="${this.value}"/>`
    }
}


export class HeadPoint extends PointClass{
    constructor(value,options){
        super(value,options)
    }
    toHTML(){
        const content = this.value.map(td).join("")
         return  tr(content,"header",css(this.options.styles))
        
    }
}


export class PersPoint extends PointClass{
    constructor(value,options){
        super(value,options)

        
    }
    toHTML(){
        this.options = {
            styles:{"background": "linear-gradient(90deg, #aea4e3, #d3ffe8)"},
            styles1:{"background": "linear-gradient(85deg, #fb63f9, #c2e534)"}
        }
    
        const content = this.value.map(item=>td(item))  // создание массива
        // my editions to person
        
    //   console.log(content[0])
    
        return   tr(content.join(""),"person",css(this.options.styles))// вставили  массив в таблицу
    }
}


export class InputPers extends PointClass{
    constructor(value,options){
        super(value, options)
    }

    toHTML(){
        this.options = {
            styles:{"background": "linear-gradient(90deg, #aea4e3, #d3ffe8)",
                    display:"flex", "flex-wrap":"no-wrap"},
            styles1:{"background": "linear-gradient(85deg, #fb63f9, #c2e534)"}
        }
        const content = this.value.map(td).join("")
        
        
        
       return tr(formAddPers(content,"person"),css(this.options.styles))
    }
}
