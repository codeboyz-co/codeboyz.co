
class Contact {
  constructor () {
    this.form = document.querySelector('form')
    this.form.addEventListener('submit', () => this.submitForm());
  }

  submitForm () {
    alert('Bedankt voor het invullen! Uw gegevens worden verwerkt');    
  }
}
let url = ""

fifteenminutes() {
  url = "https://calendly.com/obadja_ris/15min"
}
thirtyminutes() {
  url = "https://calendly.com/obadja_ris/30min"
}
sixtyminutes() {
  url = "https://calendly.com/obadja_ris/60min"
}
