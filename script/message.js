document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("whatsappContactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("userName").value.trim();
      const email = document.getElementById("userEmail").value.trim();
      const phone = document.getElementById("userPhone").value.trim();
      const message = document.getElementById("userMessage").value.trim();

      const whatsappMessage = `New Contact Request:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

      const whatsappNumber = "918122666644";
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      window.open(whatsappURL, "_blank");
    });
  }
});
