function revealMCAnswers() {
    const form = document.querySelector('form[action*="forms.google.com"]');
    if (!form) {
        alert('This doesn\'t appear to be a Google Form');
        return;
    }
 
    const correctOptions = document.querySelectorAll('[role="listitem"] [aria-checked="true"]');
 
    if (correctOptions.length === 0) {
        alert('No multiple choice answers found. Make sure:\n1. This is a quiz\n2. Answers are set in the form');
        return;
    }
 
    correctOptions.forEach(option => {
        const listItem = option.closest('[role="listitem"]');
        listItem.style.backgroundColor = '#e6f7e6';
        listItem.style.borderLeft = '4px solid #2ecc71';
        listItem.style.paddingLeft = '8px';
    });
 
    console.log(`Revealed ${correctOptions.length} correct answers`);
}
 
// Auto-run if on Google Forms
if (window.location.hostname.includes('google.com') && 
    window.location.pathname.includes('/forms/')) {
    revealMCAnswers();
}
