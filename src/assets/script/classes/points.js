// создание класса объекта

export class PointClass{
    constructor(type,value, options){
        this.type = type
        this.value = value
        this.options = options
    }

    toHTML(){
        throw new Error('Метод toHTML должен быть реазлизован') // если в наследуемых классах его не будет, то будет выдаваться эта ошибка
    }
}





 


export class PointClassNew{
    constructor(type,value, value1, options){
        this.type = type
        this.value = value
        this.value1 = value1
        this.options = options
    }
}


export class TitlePoint extends PointClass{
    constructor(value,options){
        super("title",value,options)
    }
}

export class IntroPoint extends PointClassNew{
    constructor(value,value1,options){
        super("intro",value,value1,options)
    }
}


export class ImgPoint extends PointClass{
    constructor(value,options){
        super("image",value,options)
    }
}


export class HeadPoint extends PointClass{
    constructor(value,options){
        super("header",value,options)
    }
}


export class PersPoint extends PointClass{
    constructor(value,options){
        super("person",value,options)
    }
}

