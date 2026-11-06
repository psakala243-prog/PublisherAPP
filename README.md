# PublisherAPP
<!DOCTYPE html>
<html><head>
<meta charset="utf-8">
<title>Publisher Record S-21-E</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#0a3d62">
*{box-sizing:border-box}
body{font-family:Arial;margin:0;background:#eef2f7;padding-bottom:90px}
.top{background:#1a3a5e;color:white;padding:18px;text-align:center}
.top h1{margin:0;font-size:19px}
.top p{margin:4px 0 0;font-size:13px;opacity:.85}
.yearBadge{background:#ffcc00;color:#1a3a5e;padding:5px 12px;border-radius:20px;font-weight:bold;font-size:13px;display:inline-block;margin-top:8px}
.monthHint{background:#00e676;color:#1a3a5e;padding:5px 12px;border-radius:20px;font-weight:bold;font-size:13px;display:inline-block;margin-top:6px}
.card{background:white;margin:12px;border-radius:14px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,.08)}
h3{margin:0 0 10px;color:#1a3a5e}
input,select{width:100%;padding:12px;margin:6px 0;border:1px solid #ddd;border-radius:10px;font-size:15px}
button{width:100%;padding:13px;border:none;border-radius:10px;font-weight:bold;font-size:15px;margin-top:8px}
.blue{background:#1a73e8;color:white}.green{background:#0d8a3e;color:white}.grey{background:#e8e8e8;color:#333}.orange{background:#ff6d00;color:white}
.pub{border:1px solid #eee;padding:10px;border-radius:12px;margin:8px 0;display:flex;gap:10px;align-items:center}
.pub img{width:48px;height:48px;border-radius:50%;object-fit:cover;background:#ddd}
table{width:100%;border-collapse:collapse;font-size:13px}th,td{border:1px solid #ccc;padding:7px;text-align:center}th{background:#1a3a5e;color:white}
.hidden{display:none}
.check{display:flex;align-items:center;gap:8px;margin:6px 0}.check input{width:20px}
.cardImg{width:80px;height:80px;border-radius:50%;object-fit:cover;border:2px solid #1a3a5e}
@media print{.no-print{display:none}}
</style></head><body>

<div class="top no-print">
<h1 id="congNameTop">CONGREGATION'S PUBLISHER RECORD</h1>
<p id="congSub">S-21-E • Ndola Congregation</p>
<div class="yearBadge">Service Year: <span id="serviceYearTop">...</span> • Automatic</div><br>
<div class="monthHint">📅 Today is: <span id="monthTop">...</span> • But YOU choose month below</div>
</div>

<div id="home" class="card no-print">
<h3>Welcome</h3>
<button class="blue" onclick="go('pub')">I AM A PUBLISHER</button>
<button class="grey" onclick="go('seclogin')">I AM SECRETARY 🔒</button>
<button class="orange" onclick="go('settings')">⚙️ SETTINGS - Congregation, PIN, Backup</button>
<button class="green" onclick="installApp()">📲 INSTALL APP ON PHONE</button>
<p id="msg" style="font-size:12px;color:green;text-align:center"></p>
</div>

<div id="settings" class="card hidden no-print">
<h3>⚙️ Settings</h3>
<label><b>Congregation Name</b></label>
<input id="setCong" placeholder="e.g. Ndola Central Congregation">
<label><b>Change Secretary PIN</b></label>
<input id="setPin" placeholder="New PIN" inputmode="numeric">
<button class="blue" onclick="saveSettings()">💾 SAVE SETTINGS</button>
<hr>
<h3>Backup - Very Important!</h3>
<button class="green" onclick="exportBackup()">⬇️ DOWNLOAD BACKUP FILE</button>
<button class="grey" onclick="document.getElementById('importFile').click()">⬆️ RESTORE BACKUP FILE</button>
<input type="file" id="importFile" class="hidden" accept=".json" onchange="importBackup(event)">
<button class="grey" onclick="go('home')">BACK</button>
</div>

<div id="seclogin" class="card hidden no-print">
<h3>Secretary Login</h3>
<input type="password" id="pin" placeholder="Enter your PIN">
<button class="blue" onclick="login()">LOGIN</button>
<button class="grey" onclick="go('home')">BACK</button>
</div>

<div id="pub" class="card hidden no-print">
<h3>1. Register - Once Only</h3>
<input id="pName" placeholder="Full Name">
<input type="date" id="pDob"><small>Date of Birth</small>
<input type="date" id="pBap"><small>Date of Baptism</small>
<select id="pSex"><option>Male</option><option>Female</option></select>
<select id="pHope"><option>Other Sheep</option><option>Anointed</option></select>
<select id="pPriv"><option>Publisher</option><option>Regular Pioneer</option><option>Auxiliary Pioneer</option><option>Elder</option><option>Ministerial Servant</option><option>Special Pioneer</option></select>
<label><b>Photo of Publisher</b></label>
<input type="file" id="pPhoto" accept="image/*">
<img id="photoPreview" class="hidden" style="width:80px;height:80px;border-radius:50%;object-fit:cover;margin-top:6px">
<button class="green" onclick="savePub()">✅ SAVE PUBLISHER</button>

<h3 style="margin-top:20px">2. Monthly Report</h3>
<p style="background:#fff3cd;padding:10px;border-radius:10px;font-size:14px">⚠️ <b>Choose the month you are reporting for.</b><br><small>Today is <b id="todayHint">...</b> but if you are late, choose the correct month - e.g. September or October. Service Year: <b id="syInForm"></b></small></p>
<select id="pubList"></select>
<select id="month">
<option value="">-- SELECT MONTH YOU ARE REPORTING FOR --</option>
<option>September</option><option>October</option><option>November</option><option>December</option><option>January</option><option>February</option><option>March</option><option>April</option><option>May</option><option>June</option><option>July</option><option>August</option>
</select>
<div class="check"><input type="checkbox" id="shared"> Shared in Ministry</div>
<input type="number" id="bs" placeholder="Bible Studies">
<div class="check"><input type="checkbox" id="aux"> Auxiliary Pioneer</div>
<input type="number" id="hrs" placeholder="Hours">
<input id="rem" placeholder="Remarks">
<button class="blue" onclick="saveRep()">💾 SAVE MONTHLY REPORT</button>
<button class="grey" onclick="viewCard()">👁️ VIEW MY S-21-E CARD</button>
<button class="grey" onclick="go('home')">BACK</button>
</div>

<div id="sec" class="card hidden no-print">
<h3>Secretary - <span id="syInSec"></span></h3>
<input id="search" placeholder="🔍 Search name..." oninput="showAll()">
<div id="secResult"></div>
<button class="grey" onclick="go('home')">BACK</button>
</div>

<div id="cardView" class="hidden">
<div class="card">
<h3 style="text-align:center">CONGREGATION'S PUBLISHER RECORD - S-21-E</h3>
<p style="text-align:center"><b id="congInCard"></b> • Service Year: <span id="syInCard"></span></p>
<div style="display:flex;gap:12px;align-items:center"><img id="cardPhoto" class="cardImg"><div id="pHead" style="font-size:14px;line-height:1.6"></div></div><br>
<table><tr><th>Month</th><th>Shared</th><th>Studies</th><th>Aux</th><th>Hours</th><th>Remarks</th></tr><tbody id="rows"></tbody><tr><td colspan="4" style="text-align:right"><b>TOTAL</b></td><td id="total"></td><td></td></tr></table>
<button class="blue no-print" onclick="window.print()">🖨️ PRINT / SAVE AS PDF</button>
<button class="grey no-print" onclick="go('home')">BACK</button>
</div>
</div>

<script>
let deferredPrompt;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;document.getElementById('msg').innerText='Ready to Install!';});
function installApp(){if(deferredPrompt)deferredPrompt.prompt();else alert('Chrome: 3 dots > Add to Home screen');}

// --- SERVICE YEAR AUTOMATIC, MONTH MANUAL ---
let months=["September","October","November","December","January","February","March","April","May","June","July","August"];
let now=new Date();
let CURRENT_MONTH=months[now.getMonth()];
function getServiceYear(){let y=now.getFullYear(),m=now.getMonth();return m>=8? y+" - "+(y+1) : (y-1)+" - "+y;}
let SERVICE_YEAR=getServiceYear();
document.getElementById('serviceYearTop').innerText=SERVICE_YEAR;
document.getElementById('monthTop').innerText=CURRENT_MONTH;
document.getElementById('todayHint').innerText=CURRENT_MONTH;
document.getElementById('syInForm').innerText=SERVICE_YEAR;
document.getElementById('syInSec').innerText=SERVICE_YEAR;
document.getElementById('syInCard').innerText=SERVICE_YEAR;
// NOTE: We do NOT auto-select month dropdown anymore. User must choose.

let cong=localStorage.getItem('cong')||'Ndola Congregation';
let myPin=localStorage.getItem('myPin')||'1234';
function applySettings(){document.getElementById('congNameTop').innerText=cong.toUpperCase()+" - PUBLISHER RECORD";document.getElementById('congSub').innerText='S-21-E • '+cong;document.getElementById('congInCard').innerText=cong;document.getElementById('setCong').value=cong;document.getElementById('setPin').value=myPin;}
function saveSettings(){let c=document.getElementById('setCong').value.trim();let p=document.getElementById('setPin').value.trim();if(c){cong=c;localStorage.setItem('cong',c);}if(p){myPin=p;localStorage.setItem('myPin',p);}applySettings();alert('Saved! Congregation: '+cong+' PIN: '+myPin);}
applySettings();
let pubs=JSON.parse(localStorage.getItem('pubs_good')||'[]');
let reps=JSON.parse(localStorage.getItem('reps_good')||'[]');
let photoData='';
document.getElementById('pPhoto').addEventListener('change',e=>{let f=e.target.files[0];if(!f)return;let r=new FileReader();r.onload=ev=>{photoData=ev.target.result;let img=document.getElementById('photoPreview');img.src=photoData;img.classList.remove('hidden');};r.readAsDataURL(f);});
function go(id){['home','seclogin','pub','sec','cardView','settings'].forEach(x=>document.getElementById(x).classList.add('hidden'));document.getElementById(id).classList.remove('hidden');if(id=='pub')updateList();if(id=='sec')showAll();}
function login(){if(document.getElementById('pin').value==myPin){go('sec')}else alert('Wrong PIN');}
function savePub(){let n=document.getElementById('pName').value.trim();if(!n)return alert('Enter Name');if(pubs.find(p=>p.name==n))return alert('Already registered');pubs.push({name:n,dob:document.getElementById('pDob').value,bap:document.getElementById('pBap').value,sex:document.getElementById('pSex').value,hope:document.getElementById('pHope').value,priv:document.getElementById('pPriv').value,photo:photoData});localStorage.setItem('pubs_good',JSON.stringify(pubs));updateList();photoData='';alert('Saved! '+n);}
function updateList(){let s=document.getElementById('pubList');s.innerHTML='';pubs.forEach(p=>{let o=document.createElement('option');o.text=p.name;s.add(o);});}
function saveRep(){let name=document.getElementById('pubList').value;if(!name)return alert('Register first');let month=document.getElementById('month').value;if(!month)return alert('Please SELECT the month you are reporting for - e.g. September if you are late.');reps=reps.filter(r=>!(r.name==name&&r.month==month&&r.sy==SERVICE_YEAR));reps.push({name,month,sy:SERVICE_YEAR,shared:document.getElementById('shared').checked?'✓':'',bs:document.getElementById('bs').value||'',aux:document.getElementById('aux').checked?'✓':'',hrs:document.getElementById('hrs').value||'',rem:document.getElementById('rem').value});localStorage.setItem('reps_good',JSON.stringify(reps));alert('Saved for '+month+' - '+SERVICE_YEAR);}
function viewCard(){let n=document.getElementById('pubList').value;if(n)showCard(n);}
function showAll(){let q=(document.getElementById('search').value||'').toLowerCase();let h='';pubs.filter(p=>p.name.toLowerCase().includes(q)).forEach(p=>{h+=`<div class="pub"><img src="${p.photo||'https://via.placeholder.com/48'}"><div style="flex:1"><b>${p.name}</b><br><span style="font-size:12px;color:#666">${p.priv}</span></div><button class="blue" style="width:auto;padding:10px 14px" onclick="showCard('${p.name.replace(/'/g,"")}')">VIEW</button></div>`});document.getElementById('secResult').innerHTML=h||'No publisher found';}
function showCard(name){let p=pubs.find(x=>x.name==name);go('cardView');document.getElementById('cardPhoto').src=p.photo||'https://via.placeholder.com/80';document.getElementById('pHead').innerHTML=`<b>Name:</b> ${p.name}<br><b>DOB:</b> ${p.dob||'-'} &nbsp; <b>Baptism:</b> ${p.bap||'-'}<br><b>${p.sex}</b> | <b>${p.hope}</b> | <b>${p.priv}</b>`;let rows='';let tot=0;months.forEach(m=>{let r=reps.find(x=>x.name==name&&x.month==m&&x.sy==SERVICE_YEAR)||{shared:'',bs:'',aux:'',hrs:'',rem:''};tot+=Number(r.hrs||0);rows+=`<tr><td>${m}</td><td>${r.shared}</td><td>${r.bs}</td><td>${r.aux}</td><td>${r.hrs}</td><td>${r.rem}</td></tr>`});document.getElementById('rows').innerHTML=rows;document.getElementById('total').innerText=tot;}
function exportBackup(){let data={cong,myPin,pubs,reps,exported:new Date().toString(),serviceYear:SERVICE_YEAR};let blob=new Blob([JSON.stringify(data)],{type:'application/json'});let a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='Publisher-Backup-'+SERVICE_YEAR.replace(/ /g,'')+'.json';a.click();alert('Backup Downloaded! Send it to yourself on WhatsApp.');}
function importBackup(ev){let f=ev.target.files[0];if(!f)return;let r=new FileReader();r.onload=()=>{try{let d=JSON.parse(r.result);if(d.pubs){pubs=d.pubs;localStorage.setItem('pubs_good',JSON.stringify(pubs));}if(d.reps){reps=d.reps;localStorage.setItem('reps_good',JSON.stringify(reps));}if(d.cong){cong=d.cong;localStorage.setItem('cong',cong);}if(d.myPin){myPin=d.myPin;localStorage.setItem('myPin',myPin);}applySettings();updateList();alert('Backup Restored! '+pubs.length+' publishers found.');}catch(e){alert('Not a valid backup file');}};r.readAsText(f);}
updateList();
</script></body></html>
