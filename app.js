function gender(){
    while(true){
        let gender = prompt("Enter your gender")
        if (gender === "male"){
            alert("wlcome , Mr " + " " + userName);
            break;
        }else if (gender === "female"){
            alert("wlcome , Ms " + " " + userName);
            break;
        }else{
            alert("Invaled input")
        }
    }
}

let userName =prompt("Enter your Name")
answers.push(userName);
let userTitle = gender();
answers.push(userTitle);
let drinkType = prompt("Hot or Cold drink")
answers.push(drinkType);
let drinkName = prompt("Enter your Drink Name")
answers.push(drinkName);
alert("drink is getting prepared")


let i;
let answers = [];
for( let i = 0; i<answers.length; i++){
    console.log(answers[i]);
}