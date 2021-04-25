export class Sidebar {
    constructor(selector){
        this.$el = document.querySelector(selector)
        this.paste()
       

  
    }


    paste(){

        this.$el.insertAdjacentHTML('afterbegin',this.admin) // getter
        this.$el.insertAdjacentHTML('afterbegin',this.myanswer = "I am administrator") //setter
    }

    get admin(){
        return [
            formSB("title"),
            formSB("intro"),
            formSB("img"),
            formSB("head"),
            formSB("person"),
            formSB("InputPerson"),


    ].join("");
    }

    set myanswer(value){
        return `<p>${value}</p>`
    }

   
}



// Функция создания формы
export function formSB(type){
    return `
    <form name ="${type}">
        <h5>${type}</h5>
        <div class="form-group">
            <input class="form-control form-control-sm" name="value" placeholder="value">
        </div>
        <div class ="form-group">
            <input class="form-control form-control-sm" name="styles" placeholder="styles">
        </div>
        <button type="submit"  class="btn btn-primary btn-sm"> Добавить</button>
    </form>
    </hr>
    `
}

















// // mine
// export class Test {
//     constructor(selector){
//         this.elem = document.querySelector(selector)

//         this.elem.insertAdjacentHTML("afterbegin",'<p>Привет лунатикам</p>')
//     }


//     toStyle(){

//         this.elem.style.color = "white"

//     }
// }


// export class FontStyle extends Test{
//     constructor(selector){
//         super(selector)
//     }


//     toFont(){
//         this.elem.style.fontSize = "20px"
//     }


// }