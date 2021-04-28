// 'use strict';

//grab a form
const form = document.querySelector('#contactForm');

//grab an input
const Email = form.querySelector('#email');
const Message = form.querySelector('#message');
const Name = form.querySelector('#name');


//config your firebase push
const config = {
    apiKey: "AIzaSyDMCyzSVxUwdIKDszU99tSCs6n7hsN_eeY",
    authDomain: "demosite-be27a.firebaseapp.com",
    databaseURL: "https://demosite-be27a.firebaseio.com",
    projectId: "demosite-be27a",
    storageBucket: "demosite-be27a.appspot.com",
    messagingSenderId: "305343839498",
    appId: "1:305343839498:web:ae6eeef932f3ff85"
};


//create a functions to push
function firebasePush() {


    //prevents from braking
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    //push itself
    var mailsRef = firebase.database().ref('emails').push().set(
        {
            Name: Name.value,
            Email: Email.value,
            Message: Message.value

        }
    );
}


//push on form submit
if (form) {

        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            const honeypot = document.getElementById("subject").value;
            if (honeypot == "") {
                firebasePush();
            }
            //shows alert if everything went well.
            // return alert('Data Successfully Sent to Realtime Database');
        })
}