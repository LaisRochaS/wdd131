document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;


function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
    } else {
        return "N/A";
    }
}

function displayWeatherInfo() {
    let temp = 5; 
    let windSpeed = 10; 
    let windChill = calculateWindChill(temp, windSpeed);
    
    document.getElementById("wind-chill").textContent = windChill;
}


document.addEventListener("DOMContentLoaded", function() {
    displayWeatherInfo();
});
