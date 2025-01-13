import { auth, db } from './firebase-admin.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

// تحقق من الوصول للمسؤول
function checkAdminAccess() {
    onAuthStateChanged(auth, (user) => {
        if (user && user.email === 'seebrahemsobhy@gmail.com') {
            console.log('Access granted');
            // تأكد من استدعاء fetchUsers فقط بعد تحميل الصفحة
            window.addEventListener('load', () => {
                fetchUsers(); // استدعاء الوظيفة بعد تحميل الصفحة
            });
        } else {
            console.log('Access denied');
            window.location.href = '/login.html';
        }
    });
}

checkAdminAccess();
