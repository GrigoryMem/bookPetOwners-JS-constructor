



const location = document.getElementById("site");

const btnSubmit = document.getElementById("data-btn")

const inputNotes = document.querySelectorAll(".table__input")



let parcel = [];

btnSubmit.addEventListener("click", ()=>{
    inputNotes.forEach((item=>{

        parcel.push(item.value)

    }))

    location.insertAdjacentHTML("beforeend",parcel)

})



            


           

    

    

    

   