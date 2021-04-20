import {imgPet} from './utils'
import image from '../images/logo.png'
import image1 from '../images/customers/dog1.jpg'
import image2 from '../images/customers/dog2.jpg'
import {PointClass} from './classes/points'
import {PointClassNew} from './classes/points'
import {TitlePoint,IntroPoint,ImgPoint,HeadPoint,PersPoint} from './classes/points'







export const model = [

    new TitlePoint("Данные о владельцах животных",{
        tag:"h1", 
        // styles:`background:linear-gradient(90deg, #f598a8, #f6edb2); color:linear-gradient(85deg, #fb63f9, #c2e534);
        // text-transform:uppercase; text-decoration:underline; padding:1.5rem` 
        styles:{
            background:"linear-gradient(90deg, #f598a8, #f6edb2)",
            color:"linear-gradient(85deg, #fb63f9, #c2e534)",
            "text-transform":"uppercase",
            "text-decoration":"underline",
            padding:"1.5rem",
        }
        
        
    }),
    new PointClassNew("intro","Ввведние в таблицу. Инструкция JS","Изменение таблицы",{
        styles:{
            display:"flex",
            "justify-content":"space-around",
            "font-style":"italic",
            padding:"1.5rem",
            
            color:"linear-gradient(85deg, #fb63f9, #c2e534)"
        },
        styles1:{
            background:"linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%)",
            "margin-top":"15px",
        }
    }),

    new PointClass("image",image,{
        styles:{
            padding:'2rem 0',
            display:"flex",
            "justify-content":"left",
            position:"absolute",
            top:0,
            left:0,
            "z-index":1000,
            
            },
            imageStyles:{
                width:"190px",
                height:"auto",
                position:"static",
                "justify-content":"center"
            },
            alt:"Эта картинка",
           
    }),
    

    new PointClass("header",[
        "Владелец животного",
            "Кличка животного",
        "Возраст животного,лет",
        "Адрес владельца",
            "Порода/Окрас",
            "Фотография"



        ],{
            styles:{
                background:"linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%)",
                "font-style":"italic"
            }
        }
       ),

    new PointClass("person",[
        "Иванов И.И.",
        "Лайка",
        "6",
        "г. Санкт-Петербург, улица Красных Курсантов, дом 4, квартира 17",
        "Метис/Черный",
        imgPet(image1)




    ], "empty"),

    new PointClass("person",[
        "Морозов Р.И.",
        "Панда",
        "9",
        "г. Санкт-Петербург, улица Подольских Людей, дом 9, квартира 8",
        "Пекинес/Светлый",
        imgPet(image2)




    ], "empty")
   
    
        
   

]


console.log(model[4]);
console.log(model[5]);