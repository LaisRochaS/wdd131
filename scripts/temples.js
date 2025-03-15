document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;


hamburgerIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu

    // Toggle the 'X' icon when the menu is open
    if (navMenu.classList.contains('active')) {
        hamburgerIcon.innerHTML = 'X'; // Change to 'X' when menu is open
        hamburgerIcon.classList.add('close'); // Add 'close' class for bigger 'X'
    } else {
        hamburgerIcon.innerHTML = '&#9776;'; // Change back to hamburger icon
        hamburgerIcon.classList.remove('close'); // Remove the 'close' class
    }
});

