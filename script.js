document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const schoolsGrid = document.getElementById('schools-grid');
    const layersGrid = document.getElementById('layers-grid');
    const paperContent = document.getElementById('paper-content');
    
    const modal = document.getElementById('data-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.getElementById('close-modal');

    // Parse data from data.js
    if (typeof antiSlopData !== 'undefined') {
        const { schools, layers } = antiSlopData;
        
        // Populate Schools Page / Section
        if (schools && schoolsGrid) {
            schools.forEach(item => {
                schoolsGrid.appendChild(createCard(item.name, item.content));
            });
        }
        
        // Populate Layers Page / Section
        if (layers && layersGrid) {
            layers.forEach(item => {
                layersGrid.appendChild(createCard(item.name, item.content));
            });
        }
    } else if (schoolsGrid || layersGrid) {
        console.error("Data not loaded. Ensure data.js is generated and linked.");
    }

    // Populate Paper Page
    if (paperContent) {
        // Fetch the raw markdown of the paper and render it
        // We will simulate loading it here since we don't have a direct file read in client JS
        // But since we want to avoid CORS issues on local file systems, we can inject a dummy text or fetch if running on a server.
        // Actually, let's just fetch it, assuming they run a local server or it's on GitHub pages.
        fetch('research_paper.md')
            .then(response => {
                if (!response.ok) throw new Error("Network error");
                return response.text();
            })
            .then(text => {
                paperContent.innerHTML = marked.parse(text);
            })
            .catch(err => {
                paperContent.innerHTML = `<p>Error loading research paper. Please download the PDF above.</p>`;
                console.error("Could not load research_paper.md", err);
            });
    }

    // Helper Functions
    function createCard(title, content) {
        const card = document.createElement('div');
        card.className = 'card';
        
        const titleEl = document.createElement('h3');
        titleEl.textContent = formatTitle(title);
        
        const preview = document.createElement('p');
        preview.textContent = extractPreview(content);
        
        card.appendChild(titleEl);
        card.appendChild(preview);
        
        // On click, open modal
        card.addEventListener('click', () => {
            modalTitle.textContent = formatTitle(title);
            modalBody.innerHTML = marked.parse(content);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
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

    // Modal Logic
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

    // Install Modal Logic
    const installBtn = document.getElementById('install-btn');
    const installModal = document.getElementById('install-modal');
    if (installModal) {
        const closeInstallModal = installModal.querySelector('.close-modal');
        const copyBtn = document.getElementById('copy-btn');
        const promptText = document.getElementById('prompt-text');

        if (installBtn) {
            installBtn.addEventListener('click', (e) => {
                e.preventDefault();
                installModal.style.display = 'flex';
            });
        }

        if (closeInstallModal) {
            closeInstallModal.addEventListener('click', () => {
                installModal.style.display = 'none';
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target === installModal) {
                installModal.style.display = 'none';
            }
        });

        if (copyBtn && promptText) {
            copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(promptText.innerText).then(() => {
                    const originalText = copyBtn.innerText;
                    copyBtn.innerText = 'Copied!';
                    setTimeout(() => {
                        copyBtn.innerText = originalText;
                    }, 2000);
                });
            });
        }
    }
});
