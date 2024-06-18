import { initializeApp } from 'firebase/app';




    const firebaseConfig = {
        apiKey: "AIzaSyBCm8F5g9PSC9MiGVunJuwf8HBh41usqhM",
        authDomain: "hiking-app-a8e26.firebaseapp.com",
        databaseURL: "https://hiking-app-a8e26-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "hiking-app-a8e26",
        storageBucket: "hiking-app-a8e26.appspot.com",
        messagingSenderId: "993272115209",
        appId: "1:993272115209:web:71cf8b9706d3553442c8d8",
        measurementId: "G-JJ0ZG2M9X1"
      };
    
    const app = initializeApp(firebaseConfig);

    export default app;