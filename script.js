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
