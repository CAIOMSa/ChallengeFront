const alertForm = document.getElementById('alertForm')


const sections = document.querySelectorAll(".page");
const Links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });
  Links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");   //Ativa o trem correspondente ao da página
    }
  });
});

frm.addEventListener('submit', (event) => {
    event.preventDefault();
    let status = true;
    let message = "Email cadastrado, você recebera nossas novidades!";
    const name = document.getElementById('name');
    if (name.value == '') {
      status = false;
      message = "nome não preenchido!";
    }
    const email = document.getElementById('email');
    if (email.value == '') {
      status = false;
      message = "email inválido!";
    }
    const checkBox = document.getElementById('checkBox');
    if(!checkBox.checked) {
      status = false;
      message = "checkbox não selecionado, por favor confirme!"
    }

    const alertInfo = `
    <h3 class=' status ${status ? 'positive' : 'negative'}' >${message}</h3>`
alertForm.innerHTML = alertInfo
});