// Adiciona modo noturno
function addDarkTheme() {
    document.body.classList.add("darkTheme");
    // Alterna exibição dos ícones versão escura/clara
    document.getElementById("dark").style.display = "none";
    document.getElementById("light").style.display = "block";
    document.getElementById("upfdark").style.display = "block";
    document.getElementById("upf").style.display = "none";
    document.getElementById("casadark").style.display = "block";
    document.getElementById("casa").style.display = "none";
    document.getElementById("globodark").style.display = "block";
    document.getElementById("globo").style.display = "none";
    document.getElementById("marcadordark").style.display = "block";
    document.getElementById("marcador").style.display = "none";
    document.getElementById("zoomdark").style.display = "block";
    document.getElementById("zoom").style.display = "none";

    localStorage.setItem("theme", "dark"); // Salva preferência
}


// Remove modo noturno
function removeDarkTheme() {
    document.body.classList.remove("darkTheme");
    // Alterna de volta para ícones claros
    document.getElementById("dark").style.display = "block";
    document.getElementById("light").style.display = "none";
    document.getElementById("upfdark").style.display = "none";
    document.getElementById("upf").style.display = "block";
    document.getElementById("casadark").style.display = "none";
    document.getElementById("casa").style.display = "block";
    document.getElementById("globodark").style.display = "none";
    document.getElementById("globo").style.display = "block";
    document.getElementById("marcadordark").style.display = "none";
    document.getElementById("marcador").style.display = "block";
    document.getElementById("zoomdark").style.display = "none";
    document.getElementById("zoom").style.display = "block";

    localStorage.setItem("theme", "light");
}


// Verificação do tema e tamanho da fonte, para aplicação automática
window.onload = function () {
    const theme = localStorage.getItem("theme"); // Busca preferências salvas no navegador
    if (theme === "dark") {
        addDarkTheme();
    } else {
        removeDarkTheme();
    }

    const zoom = localStorage.getItem("zoom");
    if (zoom === "large") {
        document.documentElement.style.fontSize = "115%";
    } else {
        document.documentElement.style.fontSize = "100%";
    }
};


// Função acessibilidade
function zoom() {
    const currentZoom = localStorage.getItem("zoom");
    let newZoom;

    if (currentZoom === "large") {
        document.documentElement.style.fontSize = "100%";
        newZoom = "normal";
    } else {
        document.documentElement.style.fontSize = "115%";
        newZoom = "large";
    }

    localStorage.setItem("zoom", newZoom);
    setTimeout(updateOpenCollapsibles, 200); // Ajusta altura após zoom
}



// Função barra indicadora, página principal

// Quando a página for rolada, executa a função myFunction
window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop; // Captura a posição vertical atual
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Calcula a altura total
  var scrolled = (winScroll / height) * 100; // Calcula a porcentagem
  document.getElementById("myBar").style.width = scrolled + "%"; // Atualiza barra
}   



//Função principal collapsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


//Ajuste collapsible modo acessibilidade
function updateOpenCollapsibles() {
    const collapsibles = document.getElementsByClassName("collapsible");

    for (let i = 0; i < collapsibles.length; i++) {
        const button = collapsibles[i];
        const content = button.nextElementSibling;

        if (button.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}


//Função aparecer/sumir formulário
function toggleForm() {
  const form = document.getElementById('form-container');
  form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
}


//Função alerta campo vazio formulário
function verificarFormulario() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
      alert("Por favor, preencha todos os campos antes de enviar!");
    } else {
      alert("Página em construção!");
    }
  }