import {imgPet} from './utils'
import image from '../images/logo.png'
import image1 from '../images/customers/dog1.jpg'
import image2 from '../images/customers/dog2.jpg'







export const model = [
    {type:"title", value:"Данные о владельцах животных", options:{
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
        
        
    }},
    {type:"intro", value:"Ввведние в таблицу. Инструкция JS"},
    {type:"header", value:[
        "Владелец животного",
            "Кличка животного",
        "Возраст животного,лет",
        "Адрес владельца",
            "Порода/Окрас",
            "Фотография"



        ]},
    {type:"person", value:[
            "Иванов И.И.",
            "Лайка",
            "6",
            "г. Санкт-Петербург, улица Красных Курсантов, дом 4, квартира 17",
            "Метис/Черный",
            imgPet(image1)




        ]},
        {type:"person", value:[
            "Морозов Р.И.",
            "Панда",
            "9",
            "г. Санкт-Петербург, улица Подольских Людей, дом 9, квартира 8",
            "Пекинес/Светлый",
            imgPet(image2)




        ]},
    {type:"image",value:image}

]