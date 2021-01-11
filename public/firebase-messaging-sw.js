importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCEAdXEZ6yyssmrAmBGdTdPmZdusUR0iE0",
    authDomain: "oneday-diary-f5529.firebaseapp.com",
    projectId: "oneday-diary-f5529",
    storageBucket: "oneday-diary-f5529.appspot.com",
    messagingSenderId: "629473794341",
    appId: "1:629473794341:web:cfa6699857a1fadc4262cc"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
});