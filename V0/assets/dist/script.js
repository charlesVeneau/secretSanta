var resultsBox = document.getElementById("results");
var form = document.getElementById("form");
var inputs = document.getElementById("inputsSection");
const newInput = '<input type="text" class="person" placeholder="person name">';


// addNew function add a new input to the form

addNew = () =>{
    inputs.insertAdjacentHTML("beforeend", newInput);
}

// removeLact function remove the last child of the input section

removeLast = () =>{
    let personInput = document.getElementsByClassName("person");
    if(personInput.length > 3){
        inputs.removeChild(inputs.lastChild);
    }
}

//actions the button

santaMe = () =>{
    // console.log("click")
    let santas = document.getElementsByClassName("person");
    // console.log(persons.length)

    //Array with every person
    var santaArray = [];  
     
    for (santa of santas){
        santaArray.push(santa.value)
    }

    var personArray = [...santaArray] 
    //forEach method to assign each person to another onex
    santaArray.forEach( (santa, i) => {
        getRandomInt = () =>{
            return Math.floor(Math.random()* Math.floor(personArray.length))
        } 

        while(personArray.length > 0){

            console.log(personArray.length)

            let randomNum = getRandomInt(); 

            if(personArray[randomNum] === santa){
            }
            else{
                let personSanta = personArray[randomNum];
                console.log(santa + ' est le secret santa de ' + personArray[randomNum])
                personArray.splice(randomNum, 1);
                return
            }
        }
        
    })


// if (persons.length < 3){
//     resultsBox.insertAdjacentHTML("beforeend", "<p>merci d'écrire un prénom</p>")
// }
// else{
//     for (person of persons){
//         if (person.value.length > 0){
//             resultsBox.insertAdjacentHTML("afterbegin", "<p>"+person.value+"</p>")
//         }
//     }
// }
}