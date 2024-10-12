// Handle dynamic country image loading
document.getElementById('countrySelect').addEventListener('change', function() {
    const country = this.value;
    const countryImages = document.getElementById('countryImages');
    countryImages.innerHTML = ""; // Clear previous content

    if (country === 'japan') {
        countryImages.innerHTML = `
            <img src="images/japan1.jpg" alt="Japan Destination 1">
            <img src="images/japan2.jpg" alt="Japan Destination 2">
        `;
    } else if (country === 'brazil') {
        countryImages.innerHTML = `
            <img src="images/brazil1.jpg" alt="Brazil Destination 1">
            <img src="images/brazil2.jpg" alt="Brazil Destination 2">
        `;
    }
});

// Implementing search functionality
document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const beachSection = document.getElementById('beach');
    const templeSection = document.getElementById('temples');

    // Clear previous highlights
    beachSection.style.display = 'block'; // Ensure beach section is visible
    templeSection.style.display = 'block'; // Ensure temple section is visible

    if (searchTerm.includes('beach')) {
        // Logic to display beach recommendations based on search
        beachSection.scrollIntoView(); // Scroll to beach section
    } else if (searchTerm.includes('temple')) {
        // Logic to display temple recommendations based on search
        templeSection.scrollIntoView(); // Scroll to temple section
    } else {
        beachSection.style.display = 'none'; // Hide if search term doesn't match
        templeSection.style.display = 'none'; // Hide if search term doesn't match
    }
});

// Clear button functionality
document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('searchInput').value = ''; // Clear the search input
    document.getElementById('countrySelect').value = ''; // Reset country selection
    document.getElementById('countrySelect').selectedIndex = 0; // Set the dropdown to 'Select a country'
    document.getElementById('countryImages').innerHTML = ''; // Clear country images
    document.getElementById('beach').style.display = 'block'; // Show beach section
    document.getElementById('temple').style.display = 'block'; // Show temple section
});

// Contact form validation (For the contact.html page, if needed)
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        event.preventDefault(); // Prevent form submission if validation fails
    } else {
        alert('Thank you! Your message has been sent.');
    }
});
