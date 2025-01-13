// Import the Firebase Admin SDK
const admin = require('firebase-admin');

// Load the service account key JSON file
const serviceAccount = require('serviceAccountKey.json'); // تأكد من أن هذا المسار صحيح

// Initialize the Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'mr-tarek-2e40f.firebaseapp.com' 
});

// Reference to your Firestore database
const db = admin.firestore();

module.exports = db;
