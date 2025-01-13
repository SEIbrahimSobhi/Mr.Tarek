import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

// إعدادات التكوين الخاصة بمشروع Firebase الخاص بك
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

// تهيئة Auth و Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// باقي الكود للتحقق من المستخدم
function checkAdminAccess() {
    onAuthStateChanged(auth, (user) => {
        if (user && user.email === 'seebrahemsobhy@gmail.com') {
            console.log('Access granted');
            fetchUsers();
        } else {
            console.log('Access denied');
            window.location.href = '/login.html';
        }
    });
}

checkAdminAccess();
