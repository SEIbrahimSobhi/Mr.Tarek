// Import Firebase modules
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

// Initialize Firebase Auth
const auth = getAuth();

// Function to check if the current user is allowed access
function checkAdminAccess() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Check if the user's email is the allowed admin email
      if (user.email === 'seebrahemsobhy@gmail.com') {
        console.log('Access granted');
        // Continue to load admin functionalities
        fetchUsers();
      } else {
        console.log('Access denied');
        alert('You do not have permission to access this page.');
        window.location.href = '/login.html'; // Redirect to login or another page
      }
    } else {
      console.log('No user signed in');
      window.location.href = '/login.html'; // Redirect to login or another page
    }
  });
}

// Call the function on page load
checkAdminAccess();
