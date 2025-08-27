document.getElementById("ecetForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  const phone = document.getElementById("phone").value;

  // Small change: using [0-9] instead of \d
  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Phone number must be 10 digits.");
    return;
  }

  alert("Form submitted successfully!");
  this.reset(); // Optional: reset the form after submission
});

