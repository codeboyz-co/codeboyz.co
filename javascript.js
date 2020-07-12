function showForm() {
    const form = document.querySelector('form');
    if (!form) {
        return;
    }

    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}
function hideForm() {
    const form1 = document.querySelector('form')
    if(!form1) {
        return;
    }
    form1.style.display = form1.style.display === 'none' ? 'block' : 'none';
     console.log("Bedankt voor het invullen! Uw gegevens worden verwerkt.")
}
