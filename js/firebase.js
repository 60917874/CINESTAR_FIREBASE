import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
      import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
      
      const firebaseConfig = {
        apiKey: "AIzaSyDQKcYxth9u2D62RK0v49XLePFR6V9KAU0",
        authDomain: "cinestar-3771b.firebaseapp.com",
        projectId: "cinestar-3771b",
        storageBucket: "cinestar-3771b.firebasestorage.app",
        messagingSenderId: "7034664741",
        appId: "1:7034664741:web:c927862184fd892eb90ccc"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getCines = ()=> getDocs( collection( db, "cines" ) );
export const getPeliculas = ()=> getDocs( collection( db, "peliculas" ) );