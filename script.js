document.getElementById('leadform').addEventListener('submit', function(event){
event.preventDefault();
const name =document.getElementById('name').value;
const email =document.getElementById('email').value;
const socialMedia =document.getElementById('socialMedia').value;

//Aqui você pode adicionar a lógica para enviar ao banco de dados

alert(`nome:${name}\nemail:${email}\nrede social:${socialMedia}`);

});