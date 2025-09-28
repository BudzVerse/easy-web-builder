const kamus = {
  "variabel": {
    "definisi": "Tempat menyimpan data sementara selama program berjalan.",
    "contoh": {"Python":"x = 10","Java":"int x = 10;","JavaScript":"let x = 10;"}
  },
  "integer": {
    "definisi":"Bilangan bulat.",
    "contoh":{"Python":"x = 10","Java":"int x = 10;","JavaScript":"let x = 10;"}
  },
  "float": {
    "definisi":"Bilangan pecahan desimal.",
    "contoh":{"Python":"pi = 3.14","Java":"double pi = 3.14;","JavaScript":"let pi = 3.14;"}
  },
  "string": {
    "definisi":"Kumpulan karakter atau teks.",
    "contoh":{"Python":"nama = 'Put'","Java":"String nama = \"Put\";","JavaScript":"let nama = 'Put';"}
  },
  "boolean": {
    "definisi":"Nilai benar/salah.",
    "contoh":{"Python":"status = True","Java":"boolean status = true;","JavaScript":"let status = true;"}
  },
  "list/array": {
    "definisi":"Kumpulan data berurutan.",
    "contoh":{"Python":"buah = ['apel','pisang']","Java":"int[] arr = {1,2,3};","JavaScript":"let arr = [1,2,3];"}
  },
  "tuple": {
    "definisi":"Kumpulan data berurutan tapi immutable.",
    "contoh":{"Python":"koordinat = (10,20)","Java":"// Java tidak ada tuple bawaan","JavaScript":"// JS bisa pakai array freeze"}
  },
  "dictionary/object": {
    "definisi":"Kumpulan pasangan kunci:nilai.",
    "contoh":{"Python":"mahasiswa = {'nama':'Put','umur':20}","Java":"Map<String,Integer> mahasiswa = new HashMap<>();","JavaScript":"let mahasiswa = {nama:'Put', umur:20};"}
  },
  "set": {
    "definisi":"Kumpulan data unik.",
    "contoh":{"Python":"angka = {1,2,3}","Java":"Set<Integer> angka = new HashSet<>();","JavaScript":"let angka = new Set([1,2,3]);"}
  },
  "if": {
    "definisi":"Percabangan berdasarkan kondisi.",
    "contoh":{"Python":"if x>5: print('besar')","Java":"if(x>5){System.out.println(\"besar\");}","JavaScript":"if(x>5){console.log('besar');}"}
  },
  "else": {
    "definisi":"Menangani kondisi lain jika if salah.",
    "contoh":{"Python":"else: print('kecil')","Java":"else{System.out.println(\"kecil\");}","JavaScript":"else{console.log('kecil');}"}
  },
  "elif/switch": {
    "definisi":"Percabangan tambahan (Python: elif, Java/JS: switch).",
    "contoh":{"Python":"elif x==5: print('pas')","Java":"switch(x){case 5: System.out.println(\"pas\");}","JavaScript":"switch(x){case 5: console.log('pas');}"}
  },
  "for": {
    "definisi":"Perulangan untuk koleksi atau range.",
    "contoh":{"Python":"for i in range(5): print(i)","Java":"for(int i=0;i<5;i++){System.out.println(i);}","JavaScript":"for(let i=0;i<5;i++){console.log(i);}"}
  },
  "while": {
    "definisi":"Perulangan selama kondisi benar.",
    "contoh":{"Python":"while x<5: x+=1","Java":"while(x<5){x++;}","JavaScript":"while(x<5){x++;}"}
  },
  "break": {
    "definisi":"Hentikan perulangan lebih awal.",
    "contoh":{"Python":"if i==3: break","Java":"if(i==3) break;","JavaScript":"if(i==3) break;"}
  },
  "continue": {
    "definisi":"Lanjut ke iterasi berikutnya.",
    "contoh":{"Python":"if i%2==0: continue","Java":"if(i%2==0) continue;","JavaScript":"if(i%2==0) continue;"}
  },
  "fungsi/metode": {
    "definisi":"Sekumpulan kode yang bisa dipanggil untuk tugas tertentu.",
    "contoh":{"Python":"def tambah(a,b): return a+b","Java":"int tambah(int a,int b){return a+b;}","JavaScript":"function tambah(a,b){return a+b;}"}
  },
  "class": {
    "definisi":"Template untuk membuat objek.",
    "contoh":{"Python":"class Mobil: pass","Java":"class Mobil {}","JavaScript":"class Mobil {}"}
  },
  "objek": {
    "definisi":"Instance dari class.",
    "contoh":{"Python":"m = Mobil()","Java":"Mobil m = new Mobil();","JavaScript":"let m = new Mobil();"}
  },
  "inheritance": {
    "definisi":"Pewarisan sifat dari class lain.",
    "contoh":{"Python":"class Sedan(Mobil): pass","Java":"class Sedan extends Mobil {}","JavaScript":"class Sedan extends Mobil {}"}
  },
  "polymorphism": {
    "definisi":"Sama tapi berperilaku berbeda di subclass.",
    "contoh":{"Python":"method override","Java":"method override","JavaScript":"method override"}
  },
  "encapsulation": {
    "definisi":"Menyembunyikan detail internal objek.",
    "contoh":{"Python":"self.__data = 10","Java":"private int data;","JavaScript":"#data; // private field"}
  },
  "abstraction": {
    "definisi":"Menyembunyikan implementasi, hanya expose interface.",
    "contoh":{"Python":"abstract class","Java":"abstract class","JavaScript":"class abstrak via interface/abstract"}
  },
  "try": {
    "definisi":"Mencoba kode yang berpotensi error.",
    "contoh":{"Python":"try: x=1/0","Java":"try{x=1/0;}","JavaScript":"try{x=1/0;}"}
  },
  "except/catch": {
    "definisi":"Menangkap error dari try.",
    "contoh":{"Python":"except ZeroDivisionError: print('error')","Java":"catch(ArithmeticException e){System.out.println('error');}","JavaScript":"catch(e){console.log('error');}"}
  },
  "finally": {
    "definisi":"Kode selalu dijalankan.",
    "contoh":{"Python":"finally: print('selesai')","Java":"finally{System.out.println('selesai');}","JavaScript":"finally{console.log('selesai');}"}
  },
  "raise/throw": {
    "definisi":"Melempar error sendiri.",
    "contoh":{"Python":"raise ValueError('salah')","Java":"throw new Exception('salah');","JavaScript":"throw new Error('salah');"}
  },
  "import": {
    "definisi":"Mengimpor modul/library.",
    "contoh":{"Python":"import math","Java":"import java.util.*;","JavaScript":"import fs from 'fs';"}
  },
  "from_import": {
    "definisi":"Mengimpor bagian tertentu modul.",
    "contoh":{"Python":"from math import sqrt","Java":"// Java pakai import spesifik","JavaScript":"import {readFile} from 'fs';"}
  },
  "package_manager": {
    "definisi":"Mengelola paket/library.",
    "contoh":{"Python":"pip install requests","Java":"Maven/Gradle","JavaScript":"npm install express"}
  },
  "async_await": {
    "definisi":"Kode asynchronous.",
    "contoh":{"Python":"async def fetch(): await get_data()","Java":"CompletableFuture.runAsync(() -> fetchData());","JavaScript":"async function fetch(){ await getData(); }"}
  }
  // Bisa ditambahkan semua istilah lain dari JSON super lengkap sebelumnya
};

// Sidebar & detail
const termsDiv = document.getElementById("terms");
Object.keys(kamus).sort().forEach(kata => {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = kata;
    div.onclick = () => showDetails(kata);
    termsDiv.appendChild(div);
});

function showDetails(kata) {
    const detailsDiv = document.getElementById("details");
    const data = kamus[kata];
    let html = `<h3>${kata}</h3>`;
    html += `<p><strong>Definisi:</strong> ${data.definisi}</p>`;
    html += `<h4>Contoh Kode:</h4>`;
    for(let lang in data.contoh){
        html += `<p><strong>${lang}:</strong></p><pre>${data.contoh[lang]}</pre>`;
    }
    detailsDiv.innerHTML = html;
}