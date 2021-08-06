
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const onSubmit = (e) => {
  e.preventDefault();
  //새로고침 방지
  loginForm.classList.add("hidden");
  greeting.innerText = `Hello ${loginInput.value}`;
  localStorage.setItem("username", loginInput.value);
  loginInput.value = "";
  greeting.classList.remove("hidden");
};

loginForm.addEventListener("submit", onSubmit);
greeting.addEventListener("click", () => {
  loginForm.classList.remove("hidden");
  greeting.classList.add("hidden");
});

const savedUserName = localStorage.getItem("username");

savedUserName === null
  ? (loginForm.classList.remove("hidden"),
    loginForm.addEventListener("submit", onSubmit))
  : ((greeting.innerText = `Hello ${savedUserName}`),
    greeting.classList.remove("hidden"),
    loginForm.classList.add("hidden"));