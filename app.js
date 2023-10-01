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
let answrs = [];
let userName =prompt("Enter your Name")
answrs.push(userName);
let userTitle = gender();
answrs.push(userTitle);
let drinkType = prompt("Hot or Cold drink")
answrs.push(drinkType);
let drinkName = prompt("Enter your Drink Name")
answrs.push(drinkName);
alert("drink is getting prepared")

for( let i = 0; i<answrs.length; i++){
    console.log(answrs[i]);
}