const form = document.querySelector(".signupForm");

const namePattern = /^[a-zA-Z0-9]{3,16}$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordPattern =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z\d\s])(?!.*\s).{8,}$/;

function showError(input, message) {
  const errorMsg = input.parentElement.querySelector(".errMsg");
  input.classList.add("error");
  errorMsg.textContent = message;
}

function clearError(input) {
  const errorMsg = input.parentElement.querySelector(".errMsg");
  input.classList.remove("error");
  errorMsg.textContent = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  const fullName = form.fullName;
  const email = form.email;
  const password = form.password;
  const confirmPassword = form.confirmPassword;

  // Clear previous errors
  clearError(fullName);
  clearError(email);
  clearError(password);
  clearError(confirmPassword)

  if (!namePattern.test(fullName.value)) {
    showError(fullName, "Name must be 3–16 characters");
    isValid = false;
    return
  }

  if (!emailPattern.test(email.value)) {
    showError(email, "Invalid email format");
    isValid = false;
    return;
  }

  if (!passwordPattern.test(password.value)) {
    showError(password, "Password too weak");
    isValid = false;
    return;
  }

  if (confirmPassword.value !== password.value) {
    showError(confirmPassword, "Passwords do not match");
    isValid = false;
    return;
  }

  if (isValid) {
    alert("Account created successfully 🎉");
    form.reset();
  }
});