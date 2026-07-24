importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCNW_z_MQ_S7p5vn-fRLcH6hzKmMHmpEtI",
    authDomain: "benim-ilk-sitem.firebaseapp.com",
    databaseURL: "https://benim-ilk-sitem-default-rtdb.firebaseio.com",
    projectId: "benim-ilk-sitem",
    storageBucket: "benim-ilk-sitem.firebasestorage.app",
    messagingSenderId: "766349238368",
    appId: "1:766349238368:web:0df9e38ccac84149cf2305",
    measurementId: "G-BQZZRN9PYP"
});

const messaging = firebase.messaging();

// Arka planda gelen bildirimi yakalama ve gösterme
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
