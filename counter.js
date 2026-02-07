// Visitor Counter Logic for Zentix Valentine
document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById('visitor-count');
    if (!counterElement) return;

    // Use page-specific keys for per-page tracking
    // We use the pathname to identify the page, stripping .html and leading slashes
    let pageKey = window.location.pathname.split('/').pop().replace('.html', '') || 'home';
    const namespace = "kaali-zentix-valentine";
    
    // To ensure "one user = one count" (approximately, using localStorage)
    const storageKey = `visited_${pageKey}`;
    const hasVisited = localStorage.getItem(storageKey);

    if (!hasVisited) {
        // Increment and Get Count (Only if first time)
        fetch(`https://api.counterapi.dev/v1/${namespace}/${pageKey}/up`)
            .then(response => response.json())
            .then(data => {
                if (data && data.count) {
                    counterElement.innerText = data.count.toLocaleString();
                    localStorage.setItem(storageKey, 'true');
                }
            })
            .catch(err => {
                console.error("Counter failed:", err);
                counterElement.innerText = "Active";
            });
    } else {
        // Just Get Count without incrementing
        fetch(`https://api.counterapi.dev/v1/${namespace}/${pageKey}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.count) {
                    counterElement.innerText = data.count.toLocaleString();
                }
            })
            .catch(err => {
                counterElement.innerText = "Active";
            });
    }
});
