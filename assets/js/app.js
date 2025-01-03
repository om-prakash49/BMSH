function loadComponent(placeholderId, componentPath) {
    const placeholder = document.getElementById(placeholderId);
    if (placeholder) {
        fetch(componentPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${componentPath}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                placeholder.innerHTML = data;
            })
            .catch(error => {
                console.error(`Error loading ${componentPath}:`, error);
            });
    } else {
        console.warn(`Placeholder with ID "${placeholderId}" not found.`);
    }
}

// Call the function to load header and footer on page load
window.addEventListener('DOMContentLoaded', () => {
    loadComponent('header-placeholder', 'component/header.html');
    loadComponent('footer-placeholder', 'component/footer.html');
});

