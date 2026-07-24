// 1. Firebase Modüllerini İnternet Bağlantısı (CDN) Üzerinden Yüklüyoruz
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// 2. Senin Firebase Bilgilerin
const firebaseConfig = {
  apiKey: "AIzaSyCNW_z_MQ_S7p5vn-fRLcH6hzKmMHmpEtI",
  authDomain: "benim-ilk-sitem.firebaseapp.com",
  databaseURL: "https://benim-ilk-sitem-default-rtdb.firebaseio.com",
  projectId: "benim-ilk-sitem",
  storageBucket: "benim-ilk-sitem.firebasestorage.app",
  messagingSenderId: "766349238368",
  appId: "1:766349238368:web:0df9e38ccac84149cf2305",
  measurementId: "G-BQZZRN9PYP"
};

// 3. Firebase ve Veritabanını Başlatıyoruz
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 4. HTML Elemanlarını Seçiyoruz
const mesajInput = document.getElementById("mesajInput");
const gonderBtn = document.getElementById("gonderBtn");
const paylasimlarDiv = document.getElementById("paylasimlar");

// 5. Butona Basılınca Veritabanına Yazı Gönderme
if (gonderBtn) {
    gonderBtn.onclick = function() {
        let yazi = mesajInput.value;
        if (yazi.trim() !== "") {
            push(ref(db, 'paylasimlar'), {
                metin: yazi,
                tarih: Date.now()
            });
            mesajInput.value = ""; // Girdiyi temizle
        }
    };
}

// 6. Veritabanından Canlı Veri Çekip Ekrana Yazdırma
const paylasimlarRef = ref(db, 'paylasimlar');
onValue(paylasimlarRef, (snapshot) => {
    if (paylasimlarDiv) {
        paylasimlarDiv.innerHTML = "";
        const data = snapshot.val();
        
        if (data) {
            Object.values(data).reverse().forEach(item => {
                let kart = document.createElement("div");
                kart.style.background = "#fff";
                kart.style.padding = "10px";
                kart.style.marginTop = "8px";
                kart.style.borderRadius = "5px";
                kart.style.border = "1px solid #ddd";
                kart.innerText = item.metin;
                paylasimlarDiv.appendChild(kart);
            });
        }
    }
});