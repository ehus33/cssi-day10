const shop = () => {
 const messagesRef = firebase.database().ref('/shopping');
 messagesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    findItem(data);
 });
}
let secretMessage = ""
let passcode = "1101"
let found = false;
const findItem = (messages) => {
const searchAttempt = document.querySelector('#search').value;
 for (i in messages) {
     const messageData = messages[i];
     console.log(i)
     if (i == searchAttempt) {
        console.log("it works");
        return renderMessageAsHtml(messageData);
     }
     else {
         return "item not found"
     }
 }

}

const renderMessageAsHtml = (message) => {
console.log(message)
 const messageDiv =document.getElementById('links');
    messageDiv.innerHTML = message;
}