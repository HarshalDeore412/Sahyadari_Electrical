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




