import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export default defineNuxtPlugin({
  parallel: true,
  async setup() {
    const firebaseConfig = {
      apiKey: 'AIzaSyA5YiaVGD9xj24d2dkQDQ1Q3kicthxUGZI',
      authDomain: 'challenge-site-ca667.firebaseapp.com',
      projectId: 'challenge-site-ca667',
      storageBucket: 'challenge-site-ca667.appspot.com',
      messagingSenderId: '588308624582',
      appId: '1:588308624582:web:707a67a3cfd3265cbd13c7',
      measurementId: 'G-0TM4XS0ZRS',
    };

    const app = initializeApp(firebaseConfig);

    const auth = getAuth(app);
    const firestore = getFirestore(app);

    return {
      provide: {
        auth,
        firestore,
      },
    };
  },
});
