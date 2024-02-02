const elemento = document.getElementById("paragrafo");
console.log(elemento.innerHTML);


const imprimeConsole = () => {
  console.log(document.getElementById('texto').value);
}

const eventoBtn = () => {
  const input = document.getElementById('texto');
  const texto = document.getElementById("paragrafo");
  texto.innerHTML = 'Olá, ' + input.value + '.';
  input.value = "";
}