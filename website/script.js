document.addEventListener('DOMContentLoaded', () => {
    const schoolsContainer = document.getElementById('schools-container');
    const layersContainer = document.getElementById('layers-container');
    
    const modal = document.getElementById('content-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-btn');

    // Parse data from data.js
    if (typeof antiSlopData !== 'undefined') {
        const { schools, layers } = antiSlopData;
        
        // Populate Schools
        if (schools && schoolsContainer) {
            schools.forEach(school => {
                const card = createCard(school.name, school.content);
                schoolsContainer.appendChild(card);
            });
        }
        
        // Populate Layers
        if (layers && layersContainer) {
            layers.forEach(layer => {
                const card = createCard(layer.name, layer.content);
                layersContainer.appendChild(card);
            });
        }
    } else {
        console.error("antiSlopData not found. Did data.js load?");
    }

    function createCard(title, content) {
        const card = document.createElement('div');
        card.className = 'data-card';
        
        const titleEl = document.createElement('h3');
        titleEl.textContent = formatTitle(title);
        
        const snippetEl = document.createElement('p');
        // Extract a snippet (first ~100 characters of text)
        const textOnly = content.replace(/[#*`_]/g, '').substring(0, 150) + '...';
        snippetEl.textContent = textOnly;
        
        card.appendChild(titleEl);
        card.appendChild(snippetEl);
        
        // On click, open modal
        card.addEventListener('click', () => {
            modalTitle.textContent = formatTitle(title);
            modalBody.innerHTML = marked.parse(content);
            modal.style.display = 'block';
        });
        
        return card;
    }
    
    function formatTitle(str) {
        return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    // Modal Logic
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});
