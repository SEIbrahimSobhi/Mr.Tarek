import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';

// إعدادات التكوين الخاصة بمشروعك
const firebaseConfig = {
      apiKey: "AIzaSyDO4K33SYDaeBgYweqsEXni9QQ863DI_Pc",
      authDomain: "mr-tarek-2e40f.firebaseapp.com",
      projectId: "mr-tarek-2e40f",
      storageBucket: "mr-tarek-2e40f.appspot.com",
      messagingSenderId: "807997869740",
      appId: "1:807997869740:web:8eca7473d24693bf861909"
    };

// تهيئة تطبيق Firebase
const app = initializeApp(firebaseConfig);

// تهيئة Firestore
const db = getFirestore(app);

export { db };
