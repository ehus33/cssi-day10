// Retrieve the messages from the database
const getMessages = () => {
 const messagesRef = firebase.database().ref('/login');
 messagesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    findMessage(data);
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
     if (messageData.passcode === hashedPasscode) {
        console.log("it works");
        window.location.href="homepage.html";
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