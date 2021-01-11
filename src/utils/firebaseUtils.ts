import "firebase/messaging";
import firebase from "firebase/app";

const initial = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCEAdXEZ6yyssmrAmBGdTdPmZdusUR0iE0",
    authDomain: "oneday-diary-f5529.firebaseapp.com",
    projectId: "oneday-diary-f5529",
    storageBucket: "oneday-diary-f5529.appspot.com",
    messagingSenderId: "629473794341",
    appId: "1:629473794341:web:cfa6699857a1fadc4262cc",
  };
  firebase.initializeApp(firebaseConfig);
};

const getMessagingToken = async () => {
  const messaging = firebase.messaging();
  try {
    await Notification.requestPermission();
    const messagingToken = await messaging.getToken();
    return messagingToken;
  } catch (error) {
    return "";
  }
};

const getMessage = () => {
  const messaging = firebase.messaging();
  messaging.onMessage((payload: any) => {
    const notificationTitle = payload.notification.title
      ? payload.notification.title
      : "Background Message Title";
    const notificationOptions = {
      body: payload.notification.body
        ? payload.notification.body
        : "Background Message body.",
      icon: "https://www.yonsei.ac.kr/_res/sc/img/intro/img_symbol6.png",
    };

    const notification = new Notification(
      notificationTitle,
      notificationOptions
    );
    return notification;
  });
};

export { initial, getMessagingToken, getMessage };
