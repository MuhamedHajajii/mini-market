/** Inputs fields */
let userName = document.getElementById("userName");
let userPassword = document.getElementById("userPassword");

/** SignIn Btn */
let signInBtn = document.getElementById("signInBtn");

/** Handle SignIn btn Events */
signInBtn.addEventListener("click", () => {
  getCurrentUserDetails();
});

function getCurrentUserDetails() {
  let currentUser = {
    Name: userName.value,
    Password: userPassword.value,
  };

  checkCurrentUser(currentUser);
}

function checkCurrentUser(currentUser) {
  let allUsers = JSON.parse(localStorage.getItem("allEmployeesArr"));
  for (let i = 0; i < allUsers.length; i++) {
    if (currentUser.Name === allUsers[i].Name && currentUser.Password === allUsers[i].Password) {
      console.log("Enter");
      window.location.assign("../index.html");
    }
  }
}
