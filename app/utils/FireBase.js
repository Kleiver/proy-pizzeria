import firebase from 'firebase/app';

  const firebaseConfig = {
    apiKey: "AIzaSyDZsKSohgRwd88ajM8yrcQi1Wfn5g9c8Po",
    authDomain: "proy-pizza.firebaseapp.com",
    databaseURL: "https://proy-pizza.firebaseio.com",
    projectId: "proy-pizza",
    storageBucket: "proy-pizza.appspot.com",
    messagingSenderId: "67219293146",
    appId: "1:67219293146:web:67a100c029a94c10b5f6e3"
  };
  
  export const firebaseApp = firebase.initializeApp(firebaseConfig);


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyDZsKSohgRwd88ajM8yrcQi1Wfn5g9c8Po",
//     authDomain: "proy-pizza.firebaseapp.com",
//     databaseURL: "https://proy-pizza.firebaseio.com",
//     projectId: "proy-pizza",
//     storageBucket: "proy-pizza.appspot.com",
//     messagingSenderId: "67219293146",
//     appId: "1:67219293146:web:67a100c029a94c10b5f6e3"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>