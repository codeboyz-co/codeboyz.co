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
     return <h1>Bedankt voor het invullen! Uw gegevens worden verwerkt."</h1>
}
