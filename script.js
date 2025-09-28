// Data JSON (hardcoded dari input user - lengkap)
const data = {
  "variabel": {
    "definisi": "Tempat menyimpan data sementara selama program berjalan.",
    "contoh": {"Python":"x = 10","Java":"int x = 10;","JavaScript":"let x = 10;"}
  },
  "tipe_data": {
    "integer": {"definisi":"Bilangan bulat.","Python":"x = 10","Java":"int x = 10;","JavaScript":"let x = 10;"},
    "float": {"definisi":"Bilangan pecahan desimal.","Python":"pi=3.14","Java":"double pi=3.14;","JavaScript":"let pi=3.14;"},
    "string": {"definisi":"Kumpulan karakter atau teks.","Python":"nama='Put'","Java":"String nama=\"Put\";","JavaScript":"let nama='Put';"},
    "boolean": {"definisi":"Nilai benar/salah.","Python":"status=True","Java":"boolean status=true;","JavaScript":"let status=true;"},
    "list/array": {"definisi":"Kumpulan data berurutan.","Python":"buah=['apel','pisang']","Java":"int[] arr={1,2,3};","JavaScript":"let arr=[1,2,3];"},
    "tuple": {"definisi":"Kumpulan data berurutan tapi immutable.","Python":"koordinat=(10,20)","Java":"// Java tidak ada tuple bawaan","JavaScript":"// JS bisa pakai array freeze"},
    "dictionary/object": {"definisi":"Kumpulan pasangan kunci:nilai.","Python":"mahasiswa={'nama':'Put','umur':20}","Java":"Map<String,Integer> mahasiswa=new HashMap<>();","JavaScript":"let mahasiswa={nama:'Put', umur:20};"},
    "set": {"definisi":"Kumpulan data unik.","Python":"angka={1,2,3}","Java":"Set<Integer> angka=new HashSet<>();","JavaScript":"let angka=new Set([1,2,3]);"}
  },
  "struktur_kontrol": {
    "if": {"definisi":"Percabangan berdasarkan kondisi.","Python":"if x>5: print('besar')","Java":"if(x>5){System.out.println(\"besar\");}","JavaScript":"if(x>5){console.log('besar');}"},
    "else": {"definisi":"Menangani kondisi lain jika if salah.","Python":"else: print('kecil')","Java":"else{System.out.println(\"kecil\");}","JavaScript":"else{console.log('kecil');}"},
    "elif/switch": {"definisi":"Percabangan tambahan (Python: elif, Java/JS: switch)","Python":"elif x==5: print('pas')","Java":"switch(x){case 5: System.out.println(\"pas\");}","JavaScript":"switch(x){case 5: console.log('pas');}"},
    "for": {"definisi":"Perulangan untuk koleksi atau range.","Python":"for i in range(5): print(i)","Java":"for(int i=0;i<5;i++){System.out.println(i);}","JavaScript":"for(let i=0;i<5;i++){console.log(i);}"},
    "while": {"definisi":"Perulangan selama kondisi benar.","Python":"while x<5: x+=1","Java":"while(x<5){x++;}","JavaScript":"while(x<5){x++;}"},
    "break": {"definisi":"Hentikan perulangan lebih awal.","Python":"if i==3: break","Java":"if(i==3) break;","JavaScript":"if(i==3) break;"},
    "continue": {"definisi":"Lanjut ke iterasi berikutnya.","Python":"if i%2==0: continue","Java":"if(i%2==0) continue;","JavaScript":"if(i%2==0) continue;"}
  },
  "fungsi/metode": {
    "definisi":"Sekumpulan kode yang bisa dipanggil untuk tugas tertentu.",
    "Python":"def tambah(a,b): return a+b","Java":"int tambah(int a,int b){return a+b;}","JavaScript":"function tambah(a,b){return a+b;}"
  },
  "oop": {
    "class": {"definisi":"Template untuk membuat objek.","Python":"class Mobil: pass","Java":"class Mobil {}","JavaScript":"class Mobil {}"},
    "objek": {"definisi":"Instance dari class.","Python":"m = Mobil()","Java":"Mobil m = new Mobil();","JavaScript":"let m = new Mobil();"},
    "inheritance": {"definisi":"Pewarisan sifat dari class lain.","Python":"class Sedan(Mobil): pass","Java":"class Sedan extends Mobil {}","JavaScript":"class Sedan extends Mobil {}"},
    "polymorphism": {"definisi":"Sama tapi berperilaku berbeda di subclass.","Python":"method override","Java":"method override","JavaScript":"method override"},
    "encapsulation": {"definisi":"Menyembunyikan detail internal objek.","Python":"self.__data=10","Java":"private int data;","JavaScript":"#data; // private field"},
    "abstraction": {"definisi":"Menyembunyikan implementasi, hanya expose interface.","Python":"abstract class","Java":"abstract class","JavaScript":"class abstrak via interface/abstract"}
  },
  "exception": {
    "try": {"definisi":"Mencoba kode yang berpotensi error.","Python":"try: x=1/0","Java":"try{x=1/0;}","JavaScript":"try{x=1/0;}"},
    "except/catch": {"definisi":"Menangkap error dari try.","Python":"except ZeroDivisionError: print('error')","Java":"catch(ArithmeticException e){System.out.println('error');}","JavaScript":"catch(e){console.log('error');}"},
    "finally": {"definisi":"Kode selalu dijalankan.","Python":"finally: print('selesai')","Java":"finally{System.out.println('selesai');}","JavaScript":"finally{console.log('selesai');}"},
    "raise/throw": {"definisi":"Melempar error sendiri.","Python":"raise ValueError('salah')","Java":"throw new Exception('salah');","JavaScript":"throw new Error('salah');"}
  },
  "modul_library": {
    "import": {"definisi":"Mengimpor modul/library.","Python":"import math","Java":"import java.util.*;","JavaScript":"import fs from 'fs';"},
    "from_import": {"definisi":"Mengimpor bagian tertentu modul.","Python":"from math import sqrt","Java":"// Java pakai import spesifik","JavaScript":"import {readFile} from 'fs';"},
    "package_manager": {"definisi":"Mengelola paket/library.","Python":"pip install requests","Java":"Maven/Gradle","JavaScript":"npm install express"}
  },
  "algoritma_struktur_data": {
    "array": {"definisi":"Kumpulan data berurutan.","Python":"arr=[1,2,3]","Java":"int[] arr={1,2,3};","JavaScript":"let arr=[1,2,3];"},
    "linked_list": {"definisi":"Node saling terhubung.","Python":"Node->Node","Java":"Node class","JavaScript":"class Node{}"},
    "stack": {"definisi":"LIFO","Python":"stack.append(1)","Java":"stack.push(1)","JavaScript":"stack.push(1)"},
    "queue": {"definisi":"FIFO","Python":"queue.append(1)","Java":"queue.add(1)","JavaScript":"queue.push(1)"},
    "binary_tree": {"definisi":"Pohon biner, max 2 anak per node.","Python":"root.left, root.right","Java":"root.left, root.right","JavaScript":"root.left, root.right"},
    "graph": {"definisi":"Node dan edge.","Python":"graph={1:[2,3]}","Java":"Map<Integer,List<Integer>>","JavaScript":"let graph={1:[2,3]};"},
    "hash_table": {"definisi":"Koleksi kunci: nilai dengan hash.","Python":"dict","Java":"HashMap","JavaScript":"Map"}
  },
  "regex": {"definisi":"Ekspresi pola string.","Python":"r'\\d{3}-\\d{2}-\\d{4}'","Java":"Pattern.compile(\"\\\\d{3}-\\\\d{2}-\\\\d{4}\")","JavaScript":"/\\d{3}-\\d{2}-\\d{4}/"},
  "pointer": {"definisi":"Variabel menyimpan alamat memori.","Python":"// tidak ada pointer langsung","Java":"// tidak ada pointer langsung","JavaScript":"// tidak ada pointer langsung"},
  "async_await": {"definisi":"Kode asynchronous.","Python":"async def fetch(): await get_data()","Java":"CompletableFuture.runAsync(() -> fetchData());","JavaScript":"async function fetch(){ await getData(); }"},
  "konsep_umum": {
    "api": {"definisi":"Interface komunikasi software.","Python":"REST API","Java":"REST API","JavaScript":"REST API"},
    "framework": {"definisi":"Kerangka kerja mempermudah aplikasi.","Python":"Django","Java":"Spring","JavaScript":"React"},
    "library": {"definisi":"Kumpulan fungsi siap pakai.","Python":"NumPy, Pandas","Java":"Apache Commons","JavaScript":"Lodash"},
    "debugging": {"definisi":"Menemukan dan memperbaiki bug.","Python":"print(), pdb","Java":"System.out.println(), debugger","JavaScript":"console.log(), debugger"},
    "compilation": {"definisi":"Terjemahkan kode ke bahasa mesin.","Python":"interpreted","Java":"javac main.java","JavaScript":"interpreted"},
    "interpreter": {"definisi":"Menjalankan kode baris per baris.","Python":"Python interpreter","Java":"// Java pakai JVM","JavaScript":"Node.js"},
    "version_control": {"definisi":"Melacak perubahan kode.","Python":"Git","Java":"Git","JavaScript":"Git"}
  }
};

// Daftar topik utama
const topics = Object.keys(data);

// Generate sidebar saat halaman load
document.addEventListener('DOMContentLoaded', function() {
    generateSidebar();
});

// Generate sidebar
function generateSidebar() {
    const topicList = document.getElementById('topicList');
    topicList.innerHTML = ''; // Clear existing
    topics.forEach(topic => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = topic.replace(/_/g, ' ').toUpperCase();
        a.onclick = function(e) {
            e.preventDefault();
            showTopic(topic);
            // Update active class di sidebar
            document.querySelectorAll('.sidebar a').forEach(link => link.classList.remove('active'));
            a.classList.add('active');
        };
        li.appendChild(a);
        topicList.appendChild(li);
    });
}

// Toggle sidebar untuk mobile
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Show topic content
function showTopic(topic) {
    const contentArea = document.getElementById('contentArea');
    const topicData = data[topic];
    
    // Hide all contents
    document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
    
    // Check if it's a simple topic (has 'definisi' and 'contoh') or complex (sub-topics)
    const hasSubTopics = Object.keys(topicData).length > 2 && !topicData.hasOwnProperty('contoh'); // Simple if has 'contoh', else complex
    
    let html = `
        <div class="content active" id="content-${topic}">
            <h2>${topic.replace(/_/g, ' ').toUpperCase()}</h2>
            <div class="tabs">
                <button class="tab-button active" data-topic="${topic}" data-lang="Python">Python</button>
                <button class="tab-button" data-topic="${topic}" data-lang="Java">Java</button>
                <button class="tab-button" data-topic="${topic}" data-lang="JavaScript">JavaScript</button>
            </div>
            <div id="tabContent-${topic}">
    `;
    
    if (!hasSubTopics) {
        // Simple topic: Definisi umum + contoh per bahasa
        html += `
                <div class="tab-content active">
                    <p class="definisi">${topicData.definisi || ''}</p>
                    <div class="contoh">${topicData.contoh ? topicData.contoh.Python || 'Tidak tersedia' : ''}</div>
                </div>
                <div class="tab-content">
                    <p class="definisi">${topicData.definisi || ''}</p>
                    <div class="contoh">${topicData.contoh ? topicData.contoh.Java || 'Tidak tersedia' : ''}</div>
                </div>
                <div class="tab-content">
                    <p class="definisi">${topicData.definisi || ''}</p>
                    <div class="contoh">${topicData.contoh ? topicData.contoh.JavaScript || 'Tidak tersedia' : ''}</div>
                </div>
        `;
    } else {
        // Complex topic: Loop sub-topics as accordion
        Object.keys(topicData).forEach(subKey => {
            const subData = topicData[subKey];
            if (typeof subData === 'object' && subData.definisi) {
                html += `
                    <div class="accordion">
                        <div class="accordion-header" onclick="toggleAccordion('accordion-${topic}-${subKey}')">${subKey.replace(/_/g, ' ').toUpperCase()}</div>
                        <div class="accordion-body" id="accordion-${topic}-${subKey}">
                            <div class="tabs">
                                <button class="tab-button active" data-topic="${topic}" data-sub="${subKey}" data-lang="Python">Python</button>
                                <button class="tab-button" data-topic="${topic}" data-sub="${subKey}" data-lang="Java">Java</button>
                                <button class="tab-button" data-topic="${topic}" data-sub="${subKey}" data-lang="JavaScript">JavaScript</button>
                            </div>
                            <div id="subTabContent-${topic}-${subKey}">
                                <div class="tab-content active">
                                    <p class="definisi">${subData.definisi}</p>
                                    <div class="contoh">${subData.Python || 'Tidak tersedia'}</div>
                                </div>
                                <div class="tab-content">
                                    <p class="definisi">${subData.definisi}</p>
                                    <div class="contoh">${subData.Java || 'Tidak tersedia'}</div>
                                </div>
                                <div class="tab-content">
                                    <p class="definisi">${subData.definisi}</p>
                                    <div class="contoh">${subData.JavaScript || 'Tidak tersedia'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
        });
    }
    
    html += `
            </div>
        </div>
    `;
    
    contentArea.innerHTML = html;
    
    // Add event listeners for tabs (delegation)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('tab-button')) {
            const topic = e.target.dataset.topic;
            const sub = e.target.dataset.sub;
            const lang = e.target.dataset.lang;
            
            // Update active tab button
            e.target.parentElement.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            
            // Update active tab content
            let tabContents;
            if (sub) {
                tabContents = document.querySelectorAll(`#subTabContent-${topic}-${sub} .tab-content`);
            } else {
                tabContents = document.querySelectorAll(`#tabContent-${topic} .tab-content`);
            }
            tabContents.forEach((tc, index) => {
                tc.classList.toggle('active', index === ['Python', 'Java', 'JavaScript'].indexOf(lang));
            });
        }
    });
    
    // Add event listeners for accordions if complex
    if (hasSubTopics) {
        Object.keys(topicData).forEach(subKey => {
            // Already handled by onclick in HTML
        });
    }
}

// Toggle accordion
function toggleAccordion(id) {
    const body = document.getElementById(id);
    body.classList.toggle('active');
}

// Initial load: Show first topic if needed
if (topics.length > 0) {
    showTopic(topics[0]);
}