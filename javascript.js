
class Contact {
  constructor () {
    this.form = document.querySelector('form')
    this.form.addEventListener('submit', () => this.submitForm());
  }

  submitForm () {
    alert('Bedankt voor het invullen! Uw gegevens worden verwerkt');
    
  }
}
