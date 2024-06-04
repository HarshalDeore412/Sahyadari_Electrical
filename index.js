const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});

const savetolocal = (e) => {
  let email = e.email;

  localStorage.setItem("email", email);

  if (localStorage.getItem("email")) {
    alert("your response save successfully--->");
  }
};





function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "smcharshal24@gmail.com",
    Password: "SMC@#2024",
    To: 'Harshaldeore412@gmail.com',
    From: "smcharshal24@gmail.com",
    Subject: "Sending Email using javascript",
    Body: "Well that was easy!!",
  })
  .then(function (message) {
    alert("mail sent successfully")
  });
}