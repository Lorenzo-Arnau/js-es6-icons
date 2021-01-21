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
// Milestone 2:
// - Definire un array di colori e associare ad ogni tipo di icona un colore.
// - Visualizzare le icone di colore diverso in base al tipo.
const colors = ['orange','blue','purple']


const container = document.getElementsByClassName('containerIcons')[0];
let familyType;
icons.forEach((item) => {
  if (item.family == 'animals') {
    familyType = colors[1]
  }
  if (item.family == 'vegetable') {
    familyType = colors[0]
  }
  if (item.family == 'user') {
    familyType = colors[2]
  }
container.innerHTML += `
<div class="box">
<i class="${item.prefisso}${item.name}" style="color:${familyType}"></i> </br>
${item.name}
</div>
`
});
