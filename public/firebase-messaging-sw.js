importScripts(
    "https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js"
);
importScripts(
    "https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyC3BIzLf83xWQBhOdjp9ZN_Ztp9dT-OmVc",
    authDomain: "fblaravel-4a310.firebaseapp.com",
    databaseURL: "https://fblaravel-4a310-default-rtdb.firebaseio.com",
    projectId: "fblaravel-4a310",
    storageBucket: "fblaravel-4a310.appspot.com",
    messagingSenderId: "1066486198695",
    appId: "1:1066486198695:web:fc9c6bf2b760dc9721c682",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// Handle incoming messages while the app is not in focus (i.e in the background, hidden behind other tabs, or completely closed).
messaging.onBackgroundMessage(function (payload) {
    console.log("Received background message ", payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
