document.addEventListener('DOMContentLoaded', () => {
    const schoolsGrid = document.getElementById('schools-grid');
    const layersGrid = document.getElementById('layers-grid');
    
    const modal = document.getElementById('data-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.getElementById('close-modal');

    if (typeof antiSlopData !== 'undefined') {
        const { schools, layers } = antiSlopData;
        
        if (schools && schoolsGrid) {
            schools.forEach(item => {
                schoolsGrid.appendChild(createCard(item.name, item.content));
            });
        }
        
        if (layers && layersGrid) {
            layers.forEach(item => {
                layersGrid.appendChild(createCard(item.name, item.content));
            });
        }
    } else {
        console.error("Data not loaded. Ensure data.js is generated and linked.");
    }

    function createCard(title, content) {
        const card = document.createElement('div');
        card.className = 'card';
        
        const titleEl = document.createElement('h3');
        titleEl.textContent = formatTitle(title);
        
        const preview = document.createElement('p');
        preview.textContent = extractPreview(content);
        
        card.appendChild(titleEl);
        card.appendChild(preview);
        
        card.addEventListener('click', () => {
            modalTitle.textContent = formatTitle(title);
            modalBody.innerHTML = marked.parse(content);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
        
        return card;
    }

    function formatTitle(str) {
        return str.split('-')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ');
    }
    
    function extractPreview(content) {
        return content.replace(/[#*`_>]/g, '').substring(0, 120).trim() + '...';
    }

    // Close Modal Logic
    if (closeModal && modal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});
