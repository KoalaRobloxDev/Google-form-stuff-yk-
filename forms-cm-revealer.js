javascript:(function(){
    function revealMCAnswers() {
        // Check if we're on Google Forms
        if (!window.location.hostname.includes('google.com') || 
            !window.location.pathname.includes('/forms/')) {
            alert('Please use this on a Google Forms quiz page');
            return;
        }
        
        // Find all correct multiple choice options
        const correctOptions = document.querySelectorAll('[role="listitem"] [aria-checked="true"]');
        
        if (correctOptions.length === 0) {
            alert('No correct answers found. Possible reasons:\n\n1. This isn\'t a quiz form\n2. Answers aren\'t set\n3. Questions aren\'t multiple choice');
            return;
        }
        
        // Highlight correct answers
        correctOptions.forEach(option => {
            const listItem = option.closest('[role="listitem"]');
            listItem.style.backgroundColor = '#e8f5e9';
            listItem.style.border = '2px solid #4caf50';
            listItem.style.borderRadius = '4px';
            listItem.style.padding = '8px';
            listItem.style.margin = '4px 0';
        });
        
        console.log(`Revealed ${correctOptions.length} correct answers`);
    }
    
    // Wait for form to load (checks every 500ms for up to 10 seconds)
    let attempts = 0;
    const maxAttempts = 20;
    const interval = setInterval(() => {
        attempts++;
        if (document.querySelector('[role="listitem"]') || attempts >= maxAttempts) {
            clearInterval(interval);
            revealMCAnswers();
        }
    }, 500);
})();
