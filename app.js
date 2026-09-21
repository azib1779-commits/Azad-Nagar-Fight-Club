const fighters=[
{name:"Aman Khan",style:"Boxing",weight:"60 KG",wins:8,losses:1,draws:0,img:"https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=85"},
{name:"Arjun Yadav",style:"MMA",weight:"70 KG",wins:6,losses:2,draws:1,img:"https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=85"},
{name:"Rohit Singh",style:"Kickboxing",weight:"65 KG",wins:10,losses:2,draws:0,img:"https://images.unsplash.com/photo-1591117207239-788bf8de4d30?auto=format&fit=crop&w=800&q=85"},
{name:"Faizan Ali",style:"Boxing",weight:"75 KG",wins:7,losses:1,draws:1,img:"https://images.unsplash.com/photo-1584467735871-7c4e4f5f4f8b?auto=format&fit=crop&w=800&q=85"}
];

const matches=[
{day:"28",month:"SEP",name:"Aman Khan vs Rahul Verma",type:"Boxing • 60 KG",venue:"District Fight Night"},
{day:"04",month:"OCT",name:"Arjun Yadav vs Sameer Khan",type:"MMA • 70 KG",venue:"Azad Nagar Arena"},
{day:"12",month:"OCT",name:"Rohit Singh vs Vikram Singh",type:"Kickboxing • 65 KG",venue:"District Championship"},
{day:"19",month:"OCT",name:"Faizan Ali vs Imran Khan",type:"Boxing • 75 KG",venue:"City Boxing Event"}
];

const results=[
{date:"12 SEP 2026",fight:"Aman Khan",opponent:"vs Mohit Sharma",result:"WIN"},
{date:"30 AUG 2026",fight:"Rohit Singh",opponent:"vs Deepak Kumar",result:"WIN"},
{date:"18 AUG 2026",fight:"Arjun Yadav",opponent:"vs Karan Patel",result:"LOSS"},
{date:"02 AUG 2026",fight:"Faizan Ali",opponent:"vs Adil Khan",result:"WIN"}
];

document.getElementById("fighterCount").textContent=`${fighters.length} fighters`;

document.getElementById("fighterGrid").innerHTML=fighters.map(f=>`
<article class="fighter">
<div class="fighter-img" style="background-image:url('${f.img}')"></div>
<div class="fighter-info"><span class="style">${f.style} • ${f.weight}</span><h3>${f.name}</h3>
<div class="record"><span><b>${f.wins}</b>Wins</span><span><b>${f.losses}</b>Losses</span><span><b>${f.draws}</b>Draws</span></div></div>
</article>`).join("");

document.getElementById("matchList").innerHTML=matches.map(m=>`
<article class="match"><div class="date"><b>${m.day}</b><span>${m.month}</span></div>
<div><h3>${m.name}</h3><p class="vs">${m.type}</p><p class="venue">📍 ${m.venue}</p></div></article>`).join("");

document.getElementById("resultList").innerHTML=results.map(r=>`
<article class="result"><div class="result-date">${r.date}</div><div class="result-name"><b>${r.fight}</b><small>${r.opponent}</small></div><strong class="${r.result==="WIN"?"win":"loss"}">${r.result}</strong></article>`).join("");

function toggleMenu(){document.getElementById("nav").classList.toggle("open")}
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("nav").classList.remove("open")));
