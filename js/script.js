//--------------ES6 / CATS---------------//
// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
// Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
// Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.
// Fate la prima Milestone da soli e poi attendete in comunicazioni l'orario del collegamento.


//------------------ARRAY DI OGGETTI---------------//
const gatti = [
    {
        nome: 'Nelson',
        eta: 3,
        colore: 'yellow',
        gender: 'male'
    },
    {
        nome: 'Mandela',
        eta: 4,
        colore: 'red',
        gender: 'female'
    },
    {
        nome: 'Perry',
        eta: 5,
        colore: 'black',
        gender: 'male'
    },
    {
        nome: 'Calligola',
        eta: 1,
        colore: 'brown',
        gender: 'female'
    },
];

//*************MILESTONE-1****************/
//---------------------FOREACH()----PRINT THE ARRAY WITH NAME AND COLORS------------------//
gatti.forEach(function gatti(item) {
    console.log(item.nome, item.colore);
    document.getElementById('page').innerHTML += `${item.nome} è di colore  ${item.colore} </br>`;
});
//----------FUNCTION WITH ARROW----------//
gatti.forEach((item) => { document.getElementById('page').innerHTML += `${item.nome} è di colore  ${item.colore} </br>` });

//*************MILESTONE-2****************/

var male = [];
var female = [];

for (i = 0; i < gatti.length; i++) {
    if (gatti[i].gender == 'female') {
        female.push(gatti[i]);
        const { nome, gender } = gatti[i];
        document.getElementById('female').innerHTML += `${nome} è : ${gender}  </br>`;

    } else {
        male.push(gatti[i]);
        const { nome, gender } = gatti[i];
        document.getElementById('male').innerHTML += `${nome} è :  ${gender}  </br>`;
    }
}
console.log(male);
console.log(female);


