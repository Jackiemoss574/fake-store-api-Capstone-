// Ensure the DOM content has loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Select the hamburger menu and navigation list elements
    var hamburger = document.querySelector('.hamburger-menu');
    var navList = document.querySelector('.nav-list');
  
    // Add a click event listener to the hamburger menu
    hamburger.addEventListener('click', function () {
      // Toggle the display of the navigation list
      navList.style.display = navList.style.display === 'block' ? 'none' : 'block';
    });
  });
  