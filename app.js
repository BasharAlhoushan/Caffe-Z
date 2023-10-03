// let gender;
// function gender1(){
//    while(gender !== "male" || gender !=="female"){
//     gender = prompt("what is your Gender male/female please");

//           if (gender === "male"){
//             alert("wlcome , Mr " + " " + userName);
//             break;
//         }else if (gender === "female"){
//             alert("wlcome , Ms " + " " + userName);
//             break;
//         }else{
//             alert("Enter valied gender")
//         }
//    }
// }
// let answrs = [];

// let userName =prompt("Enter your Name")
// answrs.push(userName);
// let userTitle = gender1();
// answrs.push(gender);
// let drinkType = prompt("Hot or Cold drink")
// answrs.push(drinkType);
// let drinkName = prompt("Enter your Drink Name")
// answrs.push(drinkName);
// alert("drink is getting prepared")

// for( let i = 0; i<answrs.length; i++){
//     console.log(answrs[i]);
// }




// console.log(document);


// const body = document.getElementsByTagName('body');
// console.log(body[0]);

// function CreateForm() {
//     var f = document.createElement("FORM");
//     document.body.appendChild(f);
//     var i = document.createElement("INPUT");
//     i.setAttribute("type", "password");
//     f.appendChild(i);
//  }


// EX4: DOM
// let userName = prompt("Enter your name");
// let gender = prompt("Enter your gender");
// let Age = prompt("Enter yor age");
// let drinkN = prompt("Enter drink name");


// const li = document.querySelector("#contain ul").children;
// li[0].textContent = `userName: ${userName}`;
// li[1].textContent = `gender: ${gender}`;
// li[2].textContent = `Age: ${Age}`;
// li[3].textContent = `Drink: ${drinkN}`;


document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener to the form's submit event
    var form = document.getElementById("add-person");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get form input values
        var userName = document.getElementById("userName").value;
        var drink = document.getElementById("drink").value;
        var age = document.getElementById("age").value;
        var gender = document.getElementById("gender").value;

        // Create a new paragraph element to display the data
        var paragraph = document.createElement("p");
        paragraph.innerHTML = `<strong>Name:</strong> ${userName}, <strong>Drink:</strong> ${drink}, <strong>Age:</strong> ${age}, <strong>Gender:</strong> ${gender}`;

        // Append the paragraph to the body of the index page
        document.body.appendChild(paragraph);

        // Reset the form
        form.reset();
    });
});