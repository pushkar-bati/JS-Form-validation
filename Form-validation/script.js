function showError(message) {
  document.getElementById("errorMsg").innerText = message;
}

function markField(id, valid) {
  const field = document.getElementById(id);
  if (valid) {
    field.classList.add("is-valid");
    field.classList.remove("is-invalid");
  } else {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
  }
}

function validateName() {
  const name = document.getElementById("fullName").value.trim();
  const valid = name.length >= 5;
  markField("fullName", valid);
  return valid;
}

function validateEmail() {
  const email = document.getElementById("email").value.trim();
  const valid = email.includes("@");
  markField("email", valid);
  return valid;
}

function validatePhone() {
  const phone = document.getElementById("phone").value.trim();
  const valid = phone.length === 10 && !isNaN(phone) && phone !== "1234567890";
  markField("phone", valid);
  return valid;
}

function validatePassword() {
  const password = document.getElementById("password").value;
  const name = document.getElementById("fullName").value.trim();
  const valid = password.length >= 8 && password.toLowerCase() !== "password" && password !== name;
  markField("password", valid);
  return valid;
}

function validateConfirmPassword() {
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;
  const valid = password === confirm;
  markField("confirmPassword", valid);
  return valid;
}

function updateProgress() {
  let filled = 0;
  if (validateName()) filled++;
  if (validateEmail()) filled++;
  if (validatePhone()) filled++;
  if (validatePassword()) filled++;
  if (validateConfirmPassword()) filled++;

  const percentage = (filled / 5) * 100;
  const progressBar = document.getElementById("formProgress");

  // Animate the width
  progressBar.style.width = `${percentage}%`;
  progressBar.setAttribute("aria-valuenow", percentage);

  // Reset all color classes
  progressBar.classList.remove("bg-danger", "bg-warning", "bg-info", "bg-success");

  // Apply color based on percentage
  if (percentage <= 40) {
    progressBar.classList.add("bg-danger");
  } else if (percentage <= 60) {
    progressBar.classList.add("bg-warning");
  } else if (percentage <= 80) {
    progressBar.classList.add("bg-info");
  } else {
    progressBar.classList.add("bg-success");
  }
}


function validateForm() {
  if (
    validateName() &&
    validateEmail() &&
    validatePhone() &&
    validatePassword() &&
    validateConfirmPassword()
  ) {
    showError("");
    const userName = document.getElementById("fullName").value;
    alert(`🎉 Welcome, ${userName}! Your form was submitted successfully.`);
    return true;
  } else {
    showError("Please fix the highlighted errors above.");
    return false;
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  const icon = document.getElementById("themeIcon");
  icon.className = isDark
    ? "bi bi-moon-fill fs-4 text-light"
    : "bi bi-brightness-high-fill fs-4 text-light";

  // Save to localStorage
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Apply saved theme on load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    const icon = document.getElementById("themeIcon");
    if (icon) icon.className = "bi bi-moon-fill fs-4 text-light";
  }
});
