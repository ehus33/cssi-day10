const submitMessage = () => {
    console.log("I am called");
    const passcode = document.querySelector('#passcode').value;
    const username = document.querySelector('#username').value;
    var result = checkPasscode(passcode);
    if(result != passcode){
        //error.innerHTML = result;
        return result;
    }
    else if(result == passcode){
        var hashedPasscode = new Hashes.SHA512().b64(passcode)
    }
    firebase.database().ref("/login").push({
        passcode: hashedPasscode,
        username: username
    });
}

function submitTrim(message) {
    if(message.length == 100) {
        popUp();
        message = message.substring(0,100);
    }
    return message;
}

function checkPasscode(passcode){
    let numUpper = 0;
    let numLower = 0;
    for (let i = 0; i < passcode.length; i++) {
        letter = passcode.charAt(i);
        if(letter == letter.toUpperCase() && isNaN(parseFloat(letter))){
            numUpper ++;
        }
        else if(letter == letter.toLowerCase() && isNaN(parseFloat(letter))){
            numLower ++;
        }
}
console.log(numUpper);
console.log(numLower);
    if(numUpper >0 && numLower>0 && hasNumber(passcode)){
        return passcode;
    }
    else{
        return "Password Does Not Meet Criteria. Try Again"
    }
}
function hasNumber(myString) {
  return /\d/.test(myString);
}

function popUp() {
    window.alert("Too Long");
}

function uppercaseRestriction(message) {
    isValid = false;
    for(i = 0; i < message.length; i++) {
        if(!isLetter(message.charAt(i))) {
            isValid = true;
        }
        if(message.charAt(i).isNaN()) {
            isValid = true;
        }


    }
    return isValid;
    
}
function isLetter(c) {
    return c.length == 1 && c.match(/[a-z]/i);
}