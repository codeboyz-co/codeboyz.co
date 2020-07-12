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
     return <p>Bedankt voor het invullen! Uw gegevens worden verwerkt."</p>
}
