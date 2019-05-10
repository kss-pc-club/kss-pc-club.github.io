// Load Common Files
fetch("/common/common.html").then(r=>r.text()).then(t=>document.head.innerHTML += t);
fetch("/common/header.html").then(r=>r.text()).then(t=>document.querySelector("header").innerHTML += t);
fetch("/common/footer.html").then(r=>r.text()).then(t=>document.querySelector("footer").innerHTML += t);

// Window Onload
window.addEventListener('load',()=>{

});