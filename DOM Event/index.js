const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const passwordConfirm = document.getElementById("passwordConfirm");
const tableBody = document.querySelector("tbody");
const registerBtn = document.getElementById("registerBtn");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginBtn = document.getElementById("loginBtn");
const message_container = document.getElementsByClassName("message_container")[0];
let arr = [];

registerBtn.addEventListener("click", () => {
    if (
        !emailInput.value.trim() ||
        !passwordInput.value.trim() ||
        !passwordConfirm.value.trim()
    ) {
        alert("Please fill all the fields!");
        return;
    }
    if (passwordInput.value !== passwordConfirm.value) {
        alert("Your password is not identical. Please retype your Password!");
        return;
    }

    const user = { email: emailInput.value, password: passwordInput.value };
    arr.push(user);

    const newTrItem = document.createElement("tr");
    newTrItem.innerHTML = `
     <td>${emailInput.value}</td>
     <td>${passwordInput.value}</td>
     <td><button onclick="deleteRow(this)">Delete</button></td>
   `;
    tableBody.append(newTrItem);
    emailInput.value = "";
    passwordInput.value = "";
    passwordConfirm.value = "";
});
const message = document.getElementsByClassName("message")[0];

loginBtn.addEventListener("click", () => {
    let loggedIn = false;
    arr.forEach((element) => {
        if (
            element.email === loginEmail.value.trim() &&
            element.password === loginPassword.value.trim()
        ) {
            loggedIn = true;
        }
    });
    if (loggedIn) {
        message.textContent = "Logged In";
    } else {
        message.textContent = "Not Logged In";
    }
    message_container.append(message);
});

function deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

