document.getElementById("ecetRegistrationForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  const phone = document.getElementById("phone").value;

  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Phone number must be 10 digits.");
    return;
  }
  //password validation
 if (!/^(?=.*\d).{6,}$/.test(password)) {
    alert("Password must be at least 6 characters long and include at least one number.");
    return;
  }

  alert("Form submitted successfully!");
  this.reset(); // Optional: reset the form after submission
});

