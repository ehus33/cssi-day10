// Retrieve the messages from the database
const getMessages = () => {
 const messagesRef = firebase.database().ref('/messages');
 messagesRef.on('value', (snapshot) => {
     const data = snapshot.val();
     console.log(data);
     // Find message
    findMessage(data);
    console.log("it works")
 });
}
let secretMessage = ""
let passcode = "1101"
let found = false;
const findMessage = (messages) => {
const passcodeAttempt = document.querySelector('#passcode').value;
const usernameAttempt = document.querySelector('#username').value;
var hashedPasscode = new Hashes.SHA512().b64(passcodeAttempt)
 for (message in messages) {
     const messageData = messages[message];
     if (messageData.passcode === hashedPasscode && messageData.username === usernameAttempt) {
         // Code to hide input form, and render message as HTML
        renderMessageAsHtml();
     }
 }

}


const renderMessageAsHtml = (message) => {
 // Hide Input Form
    const passcodeInput = document.querySelector('#passcodeInput');
    passcodeInput.getElementsByClassName.display = 'none';
 // Render messageas HTML
 //const messageDiv =document.querySelector('message');
 //messageDiv.innerHTML = message;
}