import * as admin from 'firebase-admin';

const app = admin.initializeApp();

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

