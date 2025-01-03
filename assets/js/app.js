// headerLoader.js
function loadHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        fetch('component/header.html')
            .then(response => response.text())
            .then(data => {
                headerPlaceholder.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading the header:', error);
            });
    }
}

// Call the function on page load
window.addEventListener('DOMContentLoaded', loadHeader);

// footerLoader.js
function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('component/footer.html')
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading the footer:', error);
            });
    }
}

// Call the function on page load
window.addEventListener('DOMContentLoaded', loadFooter);
