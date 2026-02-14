/* GOLD PARTICLES */
for(let i=0;i<80;i++){
let p=document.createElement("span");
p.innerHTML="•";
p.style.left=Math.random()*100+"vw";
p.style.fontSize=(Math.random()*6+4)+"px";
p.style.animationDuration=(Math.random()*6+6)+"s";
document.getElementById("goldParticles").appendChild(p);
}

/* LOVE COUNTER */
let startDate=new Date("2021-07-01");
let today=new Date();
let diff=Math.floor((today-startDate)/(1000*60*60*24));

/* RANDOM MESSAGES */
const messages=[
"Real love is calm. Real love is steady.",
"You feel like home in a world that feels unfamiliar.",
"I love you more each day, even in quiet moments.",
"Close together or far apart, you are forever in my heart.",
"Daily presence > Grand gestures."
];

function randomMessage(){
return messages[Math.floor(Math.random()*messages.length)];
}

/* START */
function startJourney(){
document.getElementById("intro").classList.add("hidden");
document.getElementById("heartStage").classList.remove("hidden");
generateHearts();
}

/* HEART GAME */
let found=0;
function generateHearts(){
let container=document.getElementById("heartContainer");
for(let i=0;i<12;i++){
let h=document.createElement("span");
h.innerHTML="🖤";
h.style.fontSize="30px";
h.style.margin="15px";
h.style.cursor="pointer";
h.onclick=function(){
if(Math.random()>0.6){
h.style.color="gold";
found++;
if(found>=3){
unlockStory();
}
}else{
h.style.opacity="0.2";
}
}
container.appendChild(h);
}
}

function unlockStory(){
document.getElementById("heartStage").classList.add("hidden");
showStory();
}

/* STORY */
function showStory(){
let story=document.getElementById("storyStage");
story.classList.remove("hidden");

story.innerHTML=`
<div class="storyBlock">
<h2>Our Beginning</h2>
<p>
Namma love romba simple aa start aachu…
Before you, life just moved…
After you, life started meaning something.
</p>
</div>

<div class="storyBlock">
<h2>What You Mean To Me</h2>
<p>
Nee enaku lover mattum illa… partner.
Un presence dhaan enaku calmness.
Un silence kooda enaku comfort dhaan.
You feel like home in a world that feels unfamiliar.
</p>
</div>

<div class="storyBlock">
<h2>Our Love – Real & Stable</h2>
<p>
Flashy illa… but real.
Drama kammi… depth adhigam.
Daily presence is greater than grand gestures.
</p>
</div>

<div class="storyBlock">
<h2>Why I Choose You</h2>
<p>
Fight pannina kooda unai lose panna bayam dhaan adhigam.
Perfect venam… real pothum.
</p>
</div>

<div class="storyBlock">
<h2>My Promise</h2>
<p>
Naan perfect illa… aana unaku sincere.
Un happiness ku naan reason aaganum.
We have loved each other for ${diff} beautiful days.
</p>
<p>${randomMessage()}</p>
</div>

<div class="storyBlock screen">
<h2>Final Envelope</h2>
<div class="envelope" onclick="proposal()">💌</div>
</div>
`;
}

/* PROPOSAL */
function proposal(){
let story=document.getElementById("storyStage");
story.innerHTML=`
<div class="screen">
<h1 class="highlight">
Will you marry me, Shalini? 🖤💍
</h1>
<button onclick="yes()">YES 🖤</button>
<button id="noBtn" onmouseover="moveNo()">NO 😏</button>
</div>
`;
}

function moveNo(){
let btn=document.getElementById("noBtn");
btn.style.top=Math.random()*(window.innerHeight-100)+"px";
btn.style.left=Math.random()*(window.innerWidth-100)+"px";
}

function yes(){
document.body.innerHTML=`
<div class="screen">
<h1 class="highlight">Love You Shalini 🖤😍Happy valentine's day ma🖤😚</h1>
<p style="color:white;">Thanks for coming into my life 💍</p>
</div>
`;
}

/* Easter Egg */
document.body.addEventListener("dblclick",function(){
alert("You are my forever surprise 🖤");
});
