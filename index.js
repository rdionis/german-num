//GERMAN PHONE NUMBER

// Create a function that receive a text from user and check if the user has entered a phone number, and print that out
// Note: phone number should be within the German network starts with (030,017)
// and has 7 digits after the prefix number

function germanNum(userText) {
  let userArr = userText.split(" ");
  let result = "";
  for (let i = 0; i < userArr.length; i++) {
    let first3Chr = userArr[i].slice(0, 3);
    if (first3Chr == "030" || first3Chr == "017") {
      if (userArr[i].length == 10) {
        result = userArr[i];
      } else {
        result = "This is NOT a valid number";
      }
    }
  }
  return result;
}
console.log(germanNum("afahglahgkla 0172546987 alkhflakhgka"));
console.log(germanNum("afahglahgkla 01725469870000 alkhflakhgka"));
