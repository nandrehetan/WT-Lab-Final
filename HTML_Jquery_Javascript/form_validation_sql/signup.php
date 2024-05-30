<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign Up</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: dodgerblue;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Helvetica, sans-serif;
    }

    .container {
      background-color: white;
      width: 400px;
    }

    header {
      background-color: #f0f0f0;
      padding: 15px 40px;
      margin-bottom: 20px;
    }

    .form {
      padding: 20px 40px;
    }

    .form-control {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }

    label {
      margin-bottom: 5px;
    }

    input {
      padding: 10px;
      outline: none;
      border: 1px solid gainsboro;
    }

    small {
      color: #e75c3c;
      margin-top: 5px;
      visibility: hidden;
    }

    button {
      background-color: dodgerblue;
      color: white;
      outline: none;
      border: none;
      width: 100%;
      padding: 10px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: blue;
    }

    .form-control.error small {
      visibility: visible;
    }

    .form-control.error input {
      border-color: #e75c3c;
    }

    .form-control.success input {
      border-color: #2ecc71;
    }
  </style>
</head>
<body>

<div class="container">
  <header>
    <h1>Sign Up</h1>
  </header>

  <form class="form">
    <div class="form-control">
      <label for="username">Username</label>
      <input type="text" name="username" id="username">
      <small>Error Message</small>
    </div>

    <div class="form-control">
      <label for="email">Email</label>
      <input type="email" name="email" id="email">
      <small>Error Message</small>
    </div>

    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" name="password" id="password">
      <small>Error Message</small>
    </div>

    <div class="form-control">
      <label for="cpassword">Confirm Password</label>
      <input type="password" name="cpassword" id="cpassword">
      <small>Error Message</small>
    </div>

    <button type="submit">Submit</button>
  </form>
</div>

<script>
  // Dom elements
  let form = document.querySelector("form");
  let userName = document.querySelector("#username");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  let confirmPassword = document.querySelector("#cpassword");

  // Event listener to submit form
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleInput();
  });

  // What to do with inputs ?
  function handleInput() {
    // Values from dom elements ( input )
    let userNameValue = userName.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let confirmPasswordValue = confirmPassword.value.trim();

    //  Checking for username
    if (userNameValue === "") {
      setErrorFor(userName, "Username cannot be blank");
    } else {
      setSuccessFor(userName);
    }

    // Checking for email
    if (emailValue === "") {
      setErrorFor(email, "Email cannot be blank");
    } else if (!isEmail(emailValue)) {
      setErrorFor(email, "Email is not valid");
    } else {
      setSuccessFor(email);
    }

    // Checking for password
    if (passwordValue === "") {
      setErrorFor(password, "Password cannot be blank");
    } else if (passwordValue.length < 6 || passwordValue.length > 30) {
      setErrorFor(password, "Password length should be between 6 and 30");
    } else {
      setSuccessFor(password);
    }

    // Checking for confirm password
    if (confirmPasswordValue === "") {
      setErrorFor(confirmPassword, "Confirm Password cannot be blank");
    } else if (confirmPasswordValue !== passwordValue) {
      setErrorFor(confirmPassword, "Confirm password not matched with password");
    } else {
      setSuccessFor(confirmPassword);
    }
  }

  // If there is some error, than what we want to do with input ?
  function setErrorFor(input, message) {
    let formControl = input.parentElement;
    formControl.className = "form-control error";
    let small = formControl.querySelector("small");
    small.innerText = message;
  }

  // If there is no error, than what we want to do with input ?
  function setSuccessFor(input) {
    let formControl = input.parentElement;
    formControl.className = "form-control success";
  }

  // To check if email is valid or not ?
  function isEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
</script>

</body>
</html>
