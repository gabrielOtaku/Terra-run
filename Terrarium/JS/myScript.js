/*Navigation*/

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}



/* Réseaux sociaux */
VanillaTilt.init(document.querySelectorAll(".sci li a"), {
  max: 30,
  speed: 400,
  glare: true,
  "max-glare": 1
});

document.addEventListener("DOMContentLoaded", () => {
    // Formulaire
    const form = document.querySelector("form");
    const fullName = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
  
    function sendEmail() {
      const bodyMsg = `Nom complet: ${fullName.value}<br> Email: ${email.value}<br>
       Téléphone: ${phone.value}<br> Sujet: ${subject.value}<br> Message: ${message.value}<br>`;
  
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "gherve89@gmail.com",
        Password: "0192FC309B09EFD39005E5CDE78E330F684E",
        To: 'gherve89@gmail.com',
        From: "gabriel.herve94250@gmail.com",
        Subject: subject.value,
        Body: bodyMsg
      }).then(
        message => {
          if (message === "OK") {
            Swal.fire({
              title: "Succès",
              text: "Votre mail a bien été envoyé !",
              icon: "success"
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oups",
              text: "Il y a eu une erreur dans l'envoi !"
            });
          }
        }
      );
    }
  
    function checkInputs() {
      const items = document.querySelectorAll(".item");
  
      for (const item of items) {
        if (item.value === "") {
          item.classList.add("error");
          item.parentElement.classList.add("error");
        } else {
          item.classList.remove("error");
          item.parentElement.classList.remove("error");
        }
      }
  
      checkEmail();
    }
  
    function checkEmail() {
      const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.([a-z]{2,3}))?$/;
  
      const errorTxtEmail = document.querySelector(".error-txt.email");
  
      if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");
  
        if (email.value !== "") {
          errorTxtEmail.innerText = "Veuillez entrer une adresse e-mail valide !";
        } else {
          errorTxtEmail.innerText = "Veuillez inscrire votre email";
        }
      } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
      }
    }
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      checkInputs();
  
      if (!fullName.classList.contains("error") &&
          !email.classList.contains("error") &&
          !phone.classList.contains("error") &&
          !subject.classList.contains("error") &&
          !message.classList.contains("error")) {
        sendEmail();
      }
    });
  });
  

  // Scroll reveal
  window.sr = ScrollReveal({
    reset: true,
    distance: '30px',
    duration: 2500,
    delay: 400
});

  ScrollReveal().reveal('.mes_Reptiles .mon_titre', { delay: 350, origin: 'left' });
  ScrollReveal().reveal('.page_Reptiles .images_reptiles', { delay: 400, origin: 'bottom' });
  ScrollReveal().reveal('.Reptiles02 .image2', { delay: 400, origin: 'bottom' });
  ScrollReveal().reveal('.Reptiles03 .image3', { delay: 400, origin: 'bottom' });
  ScrollReveal().reveal('.Reptiles04 .image4', { delay: 400, origin: 'bottom' });
