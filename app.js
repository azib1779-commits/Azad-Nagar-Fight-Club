const fighters = [
  {name:"Ammar Khan",style:"Fighter",weight:"65 KG",wins:0,losses:1,draws:0,img:"ammar-khan.png"},
  {name:"Mohd Ibrahim",style:"Fighter",weight:"60 KG",wins:1,losses:1,draws:0,img:"mohd-ibrahim.png"},
  {name:"Dr Arsh",style:"Fighter",weight:"67 KG",wins:0,losses:1,draws:1,img:"dr-arsh.png"},
  {name:"Mohd Hamja",style:"Fighter",weight:"63 KG",wins:1,losses:1,draws:0,img:"mohd-hamja.png"},
  {name:"Azib Khan",style:"Fighter",weight:"64 KG",wins:1,losses:0,draws:0,img:"azib-khan.png"},
  {name:"Mohd Affan",style:"Fighter",weight:"58 KG",wins:1,losses:0,draws:0,img:"mohd-affan.png"},
  {name:"Kahaf Shooter",style:"Fighter",weight:"57 KG",wins:0,losses:0,draws:0,img:"kahaf-shooter.png"},
  {name:"Mohd Adnan",style:"Fighter",weight:"71 KG",wins:0,losses:0,draws:0,img:"mohd-adnan.png"},
  {name:"Mohd Ammar",style:"Fighter",weight:"74 KG",wins:1,losses:0,draws:0,img:"mohd-ammar.jpg"}
];

const matches = [
  {day:"13",month:"SEP",year:"2026",status:"COMPLETED"},
  {day:"16",month:"SEP",year:"2026",status:"COMPLETED"},
  {day:"19",month:"SEP",year:"2026",status:"COMPLETED"},
  {day:"28",month:"SEP",year:"2026",status:"COMING"},
  {day:"12",month:"OCT",year:"2026",status:"COMING"},
  {day:"18",month:"OCT",year:"2026",status:"COMING"}
];

const fighterCount = document.getElementById("fighterCount");
const fighterGrid = document.getElementById("fighterGrid");
const matchList = document.getElementById("matchList");
const resultList = document.getElementById("resultList");

if (fighterCount)
  fighterCount.textContent = `${fighters.length} ACTIVE FIGHTERS`;

if (fighterGrid) {
  fighterGrid.innerHTML = fighters.map((f,i) => `
    <article class="fighter fighter-card">
      <div class="fighter-img" style="background-image:url('${f.img}')"></div>
      <div class="fighter-info">
        <span class="style">FIGHTER ${String(i+1).padStart(2,"0")}</span>
        <h3>${f.name}</h3>
        <p>${f.style} • ${f.weight}</p>
        <div class="record">
          <span><b>${f.wins}</b> Wins</span>
          <span><b>${f.losses}</b> Losses</span>
          <span><b>${f.draws}</b> Draws</span>
        </div>
      </div>
    </article>
  `).join("");
}

if (matchList) {
  matchList.innerHTML = matches.map(m => `
    <article class="match match-card">
      <div class="date">
        <strong>${m.day}</strong>
        <span>${m.month} ${m.year}</span>
      </div>
      <div class="match-info">
        <span class="style">AZAD NAGAR FIGHT CLUB</span>
        <h3>Fight Club Match</h3>
      </div>
      <span class="status ${m.status === "COMING" ? "upcoming" : "completed"}">
        ${m.status === "COMING" ? "UPCOMING" : "COMPLETED"}
      </span>
    </article>
  `).join("");
}

if (resultList) {
  const completed = matches.filter(m => m.status === "COMPLETED");

  resultList.innerHTML = completed.map(m => `
    <article class="result result-card">
      <div class="result-date">${m.day} ${m.month} ${m.year}</div>
      <div class="result-info">
        <strong>Fight Club Match</strong>
        <span>COMPLETED</span>
      </div>
    </article>
  `).join("");
}

function toggleMenu() {
  const nav = document.getElementById("nav");
  if (nav) nav.classList.toggle("open");
}

document.querySelectorAll("#nav a").forEach(a => {
  a.addEventListener("click", () => {
    const nav = document.getElementById("nav");
    if (nav) nav.classList.remove("open");
  });
});
