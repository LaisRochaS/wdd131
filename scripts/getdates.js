// Dynamically update the current year and the last modified date in the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;
