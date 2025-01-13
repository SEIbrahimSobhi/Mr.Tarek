import { auth, db } from './firebase-admin.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { collection, getDocs, doc, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

// مرجع مجموعة المستخدمين
const usersRef = collection(db, 'users');

// وظيفة لجلب المستخدمين وعرضهم
async function fetchUsers() {
    const snapshot = await getDocs(usersRef);
    const usersTableBody = document.getElementById('users-table').querySelector('tbody');
    usersTableBody.innerHTML = ''; // مسح محتويات الجدول

    snapshot.forEach((doc) => {
        const userData = doc.data();
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${userData.username}</td>
            <td>${userData.email}</td>
            <td>${userData.phone}</td>
            <td class="actions">
                <button onclick="deleteUser('${doc.id}')">Delete</button>
            </td>
        `;

        usersTableBody.appendChild(row);
    });
}

// وظيفة لحذف المستخدم
async function deleteUser(userId) {
    await deleteDoc(doc(db, 'users', userId));
    console.log('User deleted!');
    fetchUsers(); // تحديث قائمة المستخدمين
}

// تحقق من الوصول للمسؤول
function checkAdminAccess() {
    onAuthStateChanged(auth, (user) => {
        if (user && user.email === 'seebrahemsobhy@gmail.com') {
            console.log('Access granted');
            window.addEventListener('load', fetchUsers);
        } else {
            console.log('Access denied');
            window.location.href = '/login.html';
        }
    });
}

checkAdminAccess();
