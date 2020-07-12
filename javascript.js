function showForm() {
    const form = document.querySelector('form');
    if (!form) {
        return;
    }

    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}
function hideForm() {
    const form = document.querySelector('form')
    if(!form) {
        return;
    }
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
    
}
