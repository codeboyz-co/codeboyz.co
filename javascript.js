
class Contact {
  constructor () {
    this.form = document.querySelector('form')
    this.form.addEventListener('submit', () => this.submitForm());
  }

  submitForm () {
    alert('Bedankt voor het invullen! Uw gegevens worden verwerkt');    
  }
}
function minutes() {
  if(document.getElementById('15mins').checked) {
    document.getElementById("link").href ="https://calendly.com/obadja_ris/15min"
  }else if(document.getElementById('30 mins').checked) {
    document.getElementById("link").href = "https://calendly.com/obadja_ris/30min"
  }else if(document.getElementById('60mins').checked){
    document.getElementById("link").href = "https://calendly.com/obadja_ris/60min"
  }
}
function linkappear1() {
  document.getElementById("link").href ="https://calendly.com/obadja_ris/15min"
}
function linkappear2() {
  document.getElementById("link").href = "https://calendly.com/obadja_ris/30min"
}
function linkappear3() {
  document.getElementById("link").href = "https://calendly.com/obadja_ris/60min"
}

