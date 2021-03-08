checkValue = (inputField) => {
    if(inputField.value > 10 || inputField.value < 0){
        inputField.value = 0;
        alert("The number of "+inputField.id+" has to be between 0 and 10")
    }
}

decrease = (typeOfPerson) => {
    if(document.getElementById(typeOfPerson).value > 0){
        document.getElementById(typeOfPerson).value -=1;
    }
}

increase = (typeOfPerson) => {
    if(document.getElementById(typeOfPerson).value < 10 ){
        let value = isNaN(parseInt(document.getElementById(typeOfPerson).value)) ? 1 : parseInt(document.getElementById(typeOfPerson).value) + 1;
        document.getElementById(typeOfPerson).value = value;
    }
}