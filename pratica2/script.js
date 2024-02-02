const nome = document.getElementById('nome').value;
console.log(nome);

const endereco = document.getElementById('endereco').value;
console.log(endereco);

const email = document.getElementById('email').value;
console.log(email);

const limpaform = () => {
  document.getElementById('nome').value = "";
  document.getElementById('endereco').value = "";
  document.getElementById('email').value = "";
  document.getElementById('nome-in').innerHTML = nome;
  document.getElementById('endereco-in').innerHTML = endereco;
  document.getElementById('email-in').innerHTML = email;
}