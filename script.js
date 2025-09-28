// Masukkan semua data JSON kamus ke variabel kamus
const kamus = {  
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
  // Lanjutkan seluruh isi JSON yang kamu kirim sebelumnya...
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

// Buat tampilan sidebar
const termsDiv = document.getElementById("terms");
Object.keys(kamus).sort().forEach(kategori => {
    const catDiv = document.createElement("div");
    catDiv.className = "category";
    catDiv.textContent = kategori;
    termsDiv.appendChild(catDiv);

    const subItems = kamus[kategori];
    Object.keys(subItems).forEach(item => {
        const div = document.createElement("div");
        div.className = "item";
        div.textContent = item;
        div.onclick = () => showDetails(kategori, item);
        termsDiv.appendChild(div);
    });
});

// Fungsi menampilkan detail
function showDetails(kategori, item) {
    const detailsDiv = document.getElementById("details");
    const data = kamus[kategori][item] || kamus[item]; // fallback ke item utama
    if(!data) return;

    let html = `<h3>${item}</h3>`;
    html += `<p><strong>Definisi:</strong> ${data.definisi}</p>`;
    if(data.contoh){
        html += `<h4>Contoh Kode:</h4>`;
        for(let lang in data.contoh){
            html += `<p><strong>${lang}:</strong></p><pre>${data.contoh[lang]}</pre>`;
        }
    } else {
        for(let lang in data){
            if(typeof data[lang]==='string'){
                html += `<p><strong>${lang}:</strong> ${data[lang]}</p>`;
            }
        }
    }
    detailsDiv.innerHTML = html;
}