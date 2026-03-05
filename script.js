document.querySelectorAll(".nav-links a").forEach(anchor => {

anchor.addEventListener("click", function(e){

const targetId=this.getAttribute("href");

if(targetId.startsWith("#")){

e.preventDefault();

const target=document.querySelector(targetId);

window.scrollTo({
top:target.offsetTop-80,
behavior:"smooth"
});

}

});

});
particlesJS("particles-js", {
particles: {
number: { value: 80 },
color: { value: "#38bdf8" },
shape: { type: "circle" },
opacity: { value: 0.5 },
size: { value: 3 },
line_linked: {
enable: true,
distance: 150,
color: "#38bdf8",
opacity: 0.4,
width: 1
},
move: {
enable: true,
speed: 2
}
}
});
async function loadProjects(){

const username="maheshdattatreya24"

const response=await fetch(`https://api.github.com/users/${username}/repos`);

const repos=await response.json();

const container=document.getElementById("github-projects");

repos.slice(0,6).forEach(repo=>{

const card=document.createElement("div");

card.className="project-card";

card.innerHTML=`

<h3>${repo.name}</h3>

<p>${repo.description || "AI project repository"}</p>

<a href="${repo.html_url}" target="_blank">View Project</a>

`;

container.appendChild(card);

});

}

loadProjects();
