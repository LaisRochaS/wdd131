const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
  ];
  
  // Populate the Product Name dropdown with options
  const productSelect = document.getElementById('productName'); 
  
  // Create the first option for the placeholder
  const placeholderOption = document.createElement('option');
  placeholderOption.value = ""; 
  placeholderOption.textContent = "Select a Product ...";
  placeholderOption.disabled = true; 
  placeholderOption.selected = true;
  productSelect.appendChild(placeholderOption);
  
  // Add options from the products array dynamically
  products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;  
      option.textContent = product.name;  
      productSelect.appendChild(option);
  });
  
  // Track the review count and store it in localStorage
  window.onload = function() {
    
      let reviewCount = localStorage.getItem('reviewCount');
      if (!reviewCount) {
          reviewCount = 0; 
      }
  
      // Display the current review count on the confirmation page
      const reviewCountDisplay = document.getElementById('reviewCount');
      if (reviewCountDisplay) {
          reviewCountDisplay.textContent = reviewCount;
      }
  
      localStorage.setItem('reviewCount', parseInt(reviewCount) + 1);
  };
  // Get all the circles and the text element for displaying the rating
const circles = document.querySelectorAll('.circle');
const starText = document.getElementById('starText');

circles.forEach(circle => {
    circle.addEventListener('click', function() {
        const rating = this.getAttribute('data-rating');
        
        circles.forEach(c => c.classList.remove('selected'));
     
        this.classList.add('selected');
        
        const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating); 
        starText.textContent = stars; 
    });
});

  // Handle form submission (increment review count upon submission)
  const form = document.getElementById('reviewForm');
  if (form) {
      form.addEventListener('submit', function(event) {
          let reviewCount = localStorage.getItem('reviewCount');
          reviewCount = reviewCount ? parseInt(reviewCount) : 0;
          localStorage.setItem('reviewCount', reviewCount + 1);
      });
  }
  
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;