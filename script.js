// This file is ready for your future JavaScript functionality.
// You can show messages, handle button events, or interactive UI behavior here.

// Example: Show a message box if needed
function showMessage(text) {
    const box = document.createElement('div');
    box.className = 'message-box show';
    box.innerText = text;
    document.body.appendChild(box);

    setTimeout(() => {
        box.classList.remove('show');
        setTimeout(() => document.body.removeChild(box), 300);
    }, 3000);
}

// Example usage (uncomment to test):
// showMessage("Welcome to Nethra's Portfolio!");
