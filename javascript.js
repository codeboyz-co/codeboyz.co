let hoi = document.getElementById("invultekst").innerHTML
function showForm() {
    const form = document.querySelector('form');
    if (!form) {
        return;
    }
    else {
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
    }
}
function hideForm() {
    const form1 = document.querySelector('form')
    if(!form1) {
        return;
    }
    
    form1.style.display = form1.style.display === 'none' ? 'block' : 'none';
    hoi = "Bedankt voor het invullen!"
    
}
