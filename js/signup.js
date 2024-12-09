/** signup inputs */
let userName = document.getElementById("userName");
let userPassword = document.getElementById("userPassword");
let userRePassword = document.getElementById("userRePassword");
let userEmail = document.getElementById("userEmail");

let userGender = document.getElementsByName("userGender");

let userRole = document.getElementById("userRole");
let userDepartment = document.getElementById("userDepartment");
let userImage = document.getElementById("userImage");

/** Employee Button */
let addEmployeeButton = document.getElementById("addEmployeeButton");

/** Employee Button Events */
addEmployeeButton.addEventListener("click", () => {
  onCreateEmployeeClick();
});

/** Handle All Employees */
let allEmployeesArr = [];

/** Create Employee */
function onCreateEmployeeClick() {
  let Gender = "";
  userGender.forEach((e) => {
    if (e.checked) {
      Gender = e.value;
    }
  });
  let employee = {
    Name: userName.value,
    Password: userPassword.value,
    RePassword: userRePassword.value,
    Email: userEmail.value,
    G: Gender,
    Role: userRole.value,
    Department: userDepartment.value,
    Image: userImage?.files[0]?.name || "",
  };
  addEmployees(employee);
}

/** ADD Employee */

function addEmployees(employee) {
  allEmployeesArr.push(employee);
  localStorage.setItem("allEmployeesArr", JSON.stringify(allEmployeesArr));
}

/** Update Employee */
/** Delete Employee */
/** Search */
/** Regex */
