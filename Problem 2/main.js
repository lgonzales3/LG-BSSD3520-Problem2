/*
XXTask 1: Add a listener to the Submit button so that when the button is clicked, you store in memory whatever is typed in the Input field.

XX Task 2: If nothing was in the Input field when Submit was pressed, display an error message in a div. If they press Submit again and there is input this time, delete any error messages on screen.

XX Task 3: Take the input that is in memory and add it to a div, clearing out the Input field.

XXTask 4: Store the input from the Input field into an array in memory.

XXTask 5: Compare the last thing the user typed with a seret password string that you invent and store in memory.

XXTask 6: If the password from Input is correct, display any strings stored in the array and let the user know someone tried to hack them.

XXTask 7: If the password is not correct, display an error message.

Task 8: If there have been 4 incorrect passwords entered and stored in the array, delete the button from the screen and let the user know the account has been locked.
*/



'use strict'; /*uses newer version of JS-- if you dont have it, you will get warnings and errors*/ 


let userInput = [];
const secret="WORDS";

document.addEventListener("DOMContentLoaded", () => { /* when event accurs on document, then do something. event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets*/ 
    const surveyButton = document.getElementById("submit");
          surveyButton.addEventListener("click", () => {
            const inputField = document.getElementById("name");
            userInput.push(inputField.value);
              
              //if statement -- and use onto 40 -- userInput[userInput.length -1]; //is this equal to secret
              
              if(userInput != 'WORDS') {
                const errorMsg = document.getElementById("error");
                      errorMsg.innerHTML = "You typed the wrong password";
                  //console.log("okay")
                  
             //if(userInput >= 4) {
                 //const error1Msg = document.getElementById("error1");
                      //error1Msg.innerHTML = "You typed the wrong password";      
                  
              } else {
                    //const errorMsg = document.getElementById("entries");
                      //errorMsg.innerHTML = "You've been hacked";
                    const secret = document.getElementById("entries");
                      entries.innerHTML = "You've been hacked"; // ONLY WANT IF 31 is true ---- 
                  
                    //const secret= innerHTML="you've been hacked"
                inputField.value = '';
                inputField.focus();
              }
              console.log(userInput)
        });

}); 

