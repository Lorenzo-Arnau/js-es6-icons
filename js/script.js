// Milestone 1:
// - Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
// - Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.
const prefisso = 'fas fa-';
const tipo = 'icon';
const icons =[
  {
    name : 'cat',
    prefisso,
    tipo,
    family: 'animals',
  },
  {
    name : 'crow',
    prefisso,
    tipo,
    family: 'animals',
  },
  {
    name : 'dog',
    prefisso,
    tipo,
    family: 'animals',
  },
  {
    name : 'dove',
    prefisso,
    tipo,
    family: 'animals',
  },
  {
    name : 'dragon',
    prefisso,
    tipo,
    family: 'animals',
  },
  {
    name : 'horse',
    prefisso,
    tipo,
    family: 'animals',
  },
  {
    name : 'hippo',
    prefisso,
    tipo,
    family: 'animals',
  },
  {
    name : 'fish',
    prefisso,
    tipo,
    family: 'animals',
  },
  {
    name : 'carrot',
    prefisso,
    tipo,
    family: 'vegetable',
  },
  {
    name : 'apple-alt',
    prefisso,
    tipo,
    family: 'vegetable',
  },
  {
    name : 'lemon',
    prefisso,
    tipo,
    family: 'vegetable',
  },
  {
    name : 'pepper-hot',
    prefisso,
    tipo,
    family: 'vegetable',
  },
  {
    name : 'user-astronaut',
    prefisso,
    tipo,
    family: 'user',
  },
  {
    name : 'user-graduate',
    prefisso,
    tipo,
    family: 'user',
  },
  {
    name : 'user-ninja',
    prefisso,
    tipo,
    family: 'user',
  },
  {
    name : 'user-secret',
    prefisso,
    tipo,
    family: 'user',
  },
];
console.log(icons);
const container = document.getElementsByClassName('containerIcons')[0];
icons.forEach((item) => {
container.innerHTML += `
<div class="box">
<i class="${item.prefisso}${item.name}"></i> </br>
${item.name}
</div>
`
});
