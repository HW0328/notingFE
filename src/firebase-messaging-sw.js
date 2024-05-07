// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0niSYE-ReonLR8ea6VgKqZA5Ktg2sy8Q",
  authDomain: "noting-4bd60.firebaseapp.com",
  projectId: "noting-4bd60",
  storageBucket: "noting-4bd60.appspot.com",
  messagingSenderId: "211329894587",
  appId: "1:211329894587:web:adfeabbc63d0d521db019e",
  measurementId: "G-HKRZRJREZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

self.addEventListener("install", function (e) {
    console.log("fcm sw install..");
    self.skipWaiting();
  });
  
  self.addEventListener("activate", function (e) {
    console.log("fcm sw activate..");
  });

  self.addEventListener("push", function (e) {
    if (!e.data.json()) return;
  
    const resultData = e.data.json().notification;
    const notificationTitle = resultData.title;
    const notificationOptions = {
      body: resultData.body,
      icon: resultData.image, // 웹 푸시 이미지는 icon
      tag: resultData.tag,
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });

  self.addEventListener("notificationclick", function (event) {
    console.log("notification click");
    const url = "/";
    event.notification.close();
    event.waitUntil(clients.openWindow(url));
  });