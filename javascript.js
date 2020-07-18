
class Contact {
  constructor () {
    this.form = document.querySelector('form')
    this.form.addEventListener('submit', () => this.submitForm());

    this.toggleButton = document.querySelector('button.toggle');
    this.toggleButton.addEventListener('click', () => this.toggleForm());
  }

  toggleForm () {
    this.form.classList.toggle('visible');
  }

  submitForm () {
    alert('Bedankt voor het invullen! Uw gegevens worden verwerkt');
    this.toggleForm();
  }
}
