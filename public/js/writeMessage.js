const submitMessage = () => {
    console.log("I am called");
    const passcode = document.querySelector('#passcode').value;
    const message = document.querySelector('#message').value;
    //message = submitTrim(message);
    firebase.database().ref("/messages").push({
        passscode:passcode,
        message: message
    });
}

function submitTrim(message) {
    if(message.length == 100) {
        popUp();
        message = message.substring(0,100);
    }
    return message;
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