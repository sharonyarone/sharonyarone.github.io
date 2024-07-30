const scriptURL = 'https://script.google.com/macros/s/AKfycbxP85_PQDuN4BtLRk4REpODyMMNU-ik6YxlScRGcEZRw4KfDa6_mTeihhDYJNOjaRP5jA/exec'
const form = document.forms['rsvp-form']


form.addEventListener('submit', e => {
//disable button 
var boutonEnvoyer = document.getElementById('rsvp-btn-envoyer');

// Désactiver le bouton
boutonEnvoyer.disabled = true;

// Changer le style du bouton pour indiquer qu'il est désactivé
boutonEnvoyer.style.opacity = '0.5';
boutonEnvoyer.style.cursor = 'not-allowed';


const attendanceRadios = document.getElementsByName('attendance');
  let isChecked = false;

  for (let i = 0; i < attendanceRadios.length; i++) {
    if (attendanceRadios[i].checked) {
      isChecked = true;
      break;
    }
  }

  if (!isChecked) {
    event.preventDefault(); // Empêche la soumission du formulaire
    $('#alert-wrapper').html(alert_markup('danger', '<strong>Oups!</strong>Vous avez oublié de renseigner l\'évènement auquel vous participez'));
    
  }else{
    $('#alert-wrapper').html(alert_markup('info', '<strong class="loading">Juste un instant...<strong>'));
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    $('.loading').css("display","none");
    $('#alert-wrapper').html(alert_markup('success', '<strong>Super !</strong> On a hâte ! '));
    form.reset(); 
    setTimeout(function() {
      window.location.reload();
  }, 3000);
    })
  .catch(error => console.error('Error!', error.message))

    }




})