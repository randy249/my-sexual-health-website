function showMessage() {
  alert("You clicked the button! Welcome!");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const message = document.getElementById("form-message");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset(); // Clear the form
      message.style.display = "block"; // Show success message
    } else {
      message.textContent = "❌ Something went wrong. Try again!";
      message.style.color = "red";
      message.style.display = "block";
    }
  });
});

