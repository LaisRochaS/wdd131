
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;


document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const hamburger = document.createElement('button');
    hamburger.textContent = '☰';
    hamburger.classList.add('hamburger');
    document.body.insertBefore(hamburger, document.body.firstChild);

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
        hamburger.textContent = nav.classList.contains('active') ? '×' : '☰';
    });
});
