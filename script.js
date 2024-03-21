//submit
$(document).ready(function() {
    $('#contactForm').submit(function(e) {
      e.preventDefault();
      var name = $('input[name="name"]').val();
      var email = $('input[name="email"]').val();
      var message = $('textarea[name="message"]').val();
  
      var alertMessage = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
      alert(alertMessage);
      var successMessage = "Selamat, " + name + "! Pesan anda berhasil di submit";
      alert(successMessage);

      $('#contactForm')[0].reset();
    });
  });

  
  
  
  

  // JavaScript for image slider
  $(document).ready(function() {
    $('.carousel').carousel();
  });
  