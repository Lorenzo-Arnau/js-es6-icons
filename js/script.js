// Milestone 1: - Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia. - Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.
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
// Milestone 2: - Definire un array di colori e associare ad ogni tipo di icona un colore. - Visualizzare le icone di colore diverso in base al tipo.
const colors = ['orange','blue','purple']
const container = document.getElementsByClassName('containerIcons')[0];
let familyType;
icons.forEach((item) => {
  switch (item.family) {
    case 'animals':
      familyType = colors[1]
      break;
    case 'vegetable':
      familyType = colors[0]
      break;
    case 'user':
      familyType = colors[2]
      break;
  }
container.innerHTML += `
<div class="box">
<i class="${item.prefisso}${item.name}" style="color:${familyType}"></i> </br>
${item.name}
</div>
`
});
// Milestone 3: - Aggiungere una select per filtrare le icone in base al tipo. - Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.

const selector = $('.selector');
const familyList =[];

icons.forEach((item) => {
  if(!familyList.includes(item.family)){
    familyList.push(item.family)
  }
});
console.log(familyList);
familyList.forEach((element) => {
  selector.append(`
  <option value="${element}">${element}</option>
  `)
});

selector.change(function(){
  let valore = $(this).val();
  let visualize;
  switch (valore) {
    case 'animals':
    visualize = icons.filter((element)=>{
      return element.family == 'animals'
    })
    break;
    case 'vegetable':
    visualize = icons.filter((element)=>{
      return element.family == 'vegetable'
    })
    break;
    case 'user':
    visualize = icons.filter((element)=>{
      return element.family == 'user'
    })
    break;
    default:
    visualize = icons
    }

  container.innerHTML = '';

  visualize.forEach((item) => {
    switch (item.family) {
      case 'animals':
        familyType = colors[1]
      break;
      case 'vegetable':
        familyType = colors[0]
      break;
      case 'user':
        familyType = colors[2]
      break;
    }
    container.innerHTML += `
    <div class="box">
    <i class="${item.prefisso}${item.name}" style="color:${familyType}"></i> </br>
    ${item.name}
    </div>
    `
  });
})
