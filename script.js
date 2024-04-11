let inputs = document.querySelectorAll("input")
let btn = document.querySelector("button")
let table = document.querySelector("table")
//create a row
let row

//capture the data whatever the user have given
function handler(){
    event.preventDefault()
    let userName = inputs[0].value
    let placeName = inputs[1].value

    //creating a row in js inside onClick function
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let update = document.createElement("button") 
    let deletee = document.createElement("button")

    if(btn.innerText=="Submit"){
        update.innerText="update"
        deletee.innerText="delete"

        td1 .innerText=userName
        td2 .innerText=placeName
        td3.append(update,deletee)

        tr.append(td1,td2,td3)
        table.appendChild(tr)

        //make text boxes empty
        inputs[0].value=""
        inputs[1].value=""

        //add an event to an update button take a text which has userName and placeName
        //and change the sumbit button to update button....
        update.addEventListener("click",()=>{

            inputs[0].value=userName
            inputs[1].value=placeName

            btn.innerText = "Update"
            row=tr
        })

        //delete an event which removes column
        deletee.addEventListener("click",()=>{
            tr.remove()
        })
    } else if(btn.innerText == "Update"){
        row.cells[0].innerText=userName
        row.cells[1].innerText=placeName

        inputs[0].value=""
        inputs[1].value=""

        btn.innerText="Submit"
    }
}