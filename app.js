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

  // Get a reference to the form element
  const form = document.getElementById('myForm');

  // Add an event listener to the form for the "submit" event
  form.addEventListener('submit', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();

      // Access form fields
      const name = document.getElementById('name').value;
      const Age = document.getElementById('Age').value;
      const drink = document.getElementById('drink').value;
      const hot = document.getElementById('hot').checked;
      const cold = document.getElementById('cold').checked;

      // Create a result message
      let resultMessage = `Name: ${name}, Age: ${Age}, Drink: ${drink}, `;
      if (hot) {
          resultMessage += "Hot, ";
      }
      if (cold) {
          resultMessage += "Cold, ";
      }

      // Display the result
      const resultDiv = document.getElementById('result');
      resultDiv.textContent = resultMessage;
  });