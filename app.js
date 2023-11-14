
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD91NBswvqlX9M9J8NYOCpSg8l3ktEL88U",
    authDomain: "cr-data-posting-applicat-d18bf.firebaseapp.com",
    databaseURL: "https://cr-data-posting-applicat-d18bf-default-rtdb.firebaseio.com"
    projectId: "cr-data-posting-applicat-d18bf",
    storageBucket: "cr-data-posting-applicat-d18bf.appspot.com",
    messagingSenderId: "175696805070",
    appId: "1:175696805070:web:999e88fecd1365966ae49f"
  };
  
  // Initilaze Firebase 
  firebase.initializeApp(firebaseConfig);
// Reference messages collection
var messagesRef = firebase.database().ref('message');

// listen for form submit
document.getElementById('contactForm').addEventListener('submit',submitForm);

//Submit form

function submitForm(e){
    e.preventDefault();
//get values
var name = getInputVal('Name');
var name = getInputVal('Email');
var name = getInputVal('Message');
// save message
saveMessage(Name,Email,Message);
Document.querySelector('.alert').style.display = 'block';
//Hide alert after 3 seconds
setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
},3000);

//clear form
document.getElementById('contactForm').reset();
}
// function to get form values
function getInputVal(id){
    returndocument.getElementById(id).value;
}
//save message too firebase 
function saveMessage(Name,Email,Message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        Name:Name;
        Email:Email;
        Message: Message;
    })
}