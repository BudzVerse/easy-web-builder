const data = {/* JSON kamu tetap sama */};
const topics = Object.keys(data);

// Load sidebar
document.addEventListener('DOMContentLoaded', () => generateSidebar());
function generateSidebar() {
    const list = document.getElementById('topicList');
    topics.forEach(topic => {
        const a = document.createElement('a');
        a.href = '#'; a.textContent = topic.replace(/_/g,' ').toUpperCase();
        a.onclick = e => { e.preventDefault(); showTopic(topic); setActiveSidebar(a); }
        const li = document.createElement('li'); li.appendChild(a); list.appendChild(li);
    });
}
function setActiveSidebar(activeLink) {
    document.querySelectorAll('.sidebar a').forEach(a=>a.classList.remove('active'));
    activeLink.classList.add('active');
}
function toggleSidebar() { document.getElementById('sidebar').classList.toggle('open'); }

function showTopic(topic){
    const contentArea = document.getElementById('contentArea');
    const topicData = data[topic];
    const hasSub = Object.keys(topicData).some(k=>typeof topicData[k]==='object' && topicData[k].definisi);
    let html = `<div class="content active"><h2>${topic.replace(/_/g,' ').toUpperCase()}</h2>`;
    if(!hasSub){
        html += renderTabs(topicData);
    } else {
        Object.keys(topicData).forEach(sub=>{
            const subData = topicData[sub];
            html += `<div class="accordion">
                        <div class="accordion-header" onclick="toggleAccordion('body-${topic}-${sub}')">${sub.replace(/_/g,' ').toUpperCase()}</div>
                        <div class="accordion-body" id="body-${topic}-${sub}">${renderTabs(subData)}</div>
                     </div>`;
        });
    }
    html += '</div>'; contentArea.innerHTML=html;
    initTabs();
}
function renderTabs(obj){
    const langs = ['Python','Java','JavaScript'];
    let tabsHtml = '<div class="tabs">';
    langs.forEach((lang,i)=>tabsHtml+=`<button class="tab-button ${i===0?'active':''}" data-lang="${lang}">${lang}</button>`);
    tabsHtml+='</div>';
    tabsHtml+='<div class="tab-contents">';
    langs.forEach((lang,i)=>{
        tabsHtml+=`<div class="tab-content ${i===0?'active':''}">
                        <p class="definisi">${obj.definisi||''}</p>
                        <div class="contoh">${obj[lang]|| (obj.contoh?obj.contoh[lang]:'Tidak tersedia')}</div>
                   </div>`;
    });
    tabsHtml+='</div>'; return tabsHtml;
}
function initTabs(){
    document.querySelectorAll('.tab-button').forEach(btn=>{
        btn.onclick=e=>{
            const parent = btn.parentElement;
            parent.querySelectorAll('.tab-button').forEach(b=>b.classList.remove('active'));
            btn.classList.add('active');
            const tabContents = parent.nextElementSibling.querySelectorAll('.tab-content');
            const langs = ['Python','Java','JavaScript'];
            tabContents.forEach((tc,i)=>tc.classList.toggle('active',langs[i]===btn.dataset.lang));
        };
    });
}
function toggleAccordion(id){
    const body = document.getElementById(id);
    body.classList.toggle('active');
}

// Load first topic
if(topics.length>0) showTopic(topics[0]);