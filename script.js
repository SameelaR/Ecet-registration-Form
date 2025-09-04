document.getElementById("ecetRegistrationForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  const phone = document.getElementById("phone").value;

  // Phone validation
  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Phone number must be 10 digits.");
    return;
  }

  alert("Form submitted successfully!");
  this.reset(); // Optional: reset the form after submission
});
