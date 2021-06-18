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
        colore: '#BE4BDB',
        gender: 'male'
    },
    {
        nome: 'Mandela',
        eta: 4,
        colore: '#FEEEEE',
        gender: 'female'
    },
    {
        nome: 'Perry',
        eta: 5,
        colore: '#FFFFF',
        gender: 'male'
    },
    {
        nome: 'Calligola',
        eta: 1,
        colore: '#F75C1E',
        gender: 'female'
    },
];

//*************MILESTONE-1****************/
//---------------------FOREACH()----PRINT THE ARRAY WITH NAME AND COLORS------------------//
gatti.forEach(function gatti(item) {
    console.log(item.nome, item.colore);
    document.getElementById('page').innerHTML += `${item.nome} è di colore <i class="fas fa-cat" style="color: ${item.colore}"></i> </br>`;
});
//----------FUNCTION WITH ARROW----------//
gatti.forEach((item) => { document.getElementById('page').innerHTML += `${item.nome} è di colore <i class="fas fa-cat" style="color: ${item.colore}"> ` });

//*************MILESTONE-2****************/
//-----------WITH CICLO FOR----------------------//
// var male = [];
// var female = [];

// for (i = 0; i < gatti.length; i++) {
//     if (gatti[i].gender == 'female') {
//         female.push(gatti[i]);
//         const { nome, gender } = gatti[i];
//         document.getElementById('female').innerHTML += `${nome} è : ${gender} <i class="fas fa-cat" style="color: pink"></i> </br> `;

//     } else {
//         male.push(gatti[i]);
//         const { nome, gender } = gatti[i];
//         document.getElementById('male').innerHTML += `${nome} è: ${gender} <i class="fas fa-cat" style="color: blue"></i> </br > `;
//     }
// }
// console.log(male);
// console.log(female);
//--------------------MILESTONE 3--------------------------//
const pink = "#E7120F";
const blue = "#211CBB";

const newCats = cats.map((element) => {
    const { name, age, color, gender } = element;
    const opacity = element.age / 9;

    return {
        name,
        age,
        color,
        gender,
        ribbon: {
            color: (gender == "female") ? pink : blue,
            opacity: opacity
        }
    }
});

const printCatsRibbon = (array) => {
    array.forEach((element) => {
        document.getElementById("container").innerHTML += `<br/><br/>
            ${element.name} : <i class="fas fa-cat" style="color:${element.color}"></i> 
            <i class="fas fa-ribbon" style="color:${element.ribbon.color}; opacity:${element.ribbon.opacity}"></i>,
        
        `;
    });
}
//-----------DUE CONTENITORI DISTINTI---------//
const maleCats = newCats.filter((element) => {
    return element.gender === "male";
});
document.getElementById("container").innerHTML += "<br/><br/>Maschi";
printCatsRibbon(maleCats);


const femaleCats = newCats.filter((element) => {
    return element.gender === "female";
});
document.getElementById("container").innerHTML += "<br/><br/>Femmine";
printCatsRibbon(femaleCats);


document.getElementById("container").innerHTML += "<br/><br/>Milestone 3";

let catsFemaleMale = [...femaleCats, ...maleCats];

const catsFemaleMaleZip = catsFemaleMale.map((element) => {
    const { name, color, ribbon } = element;

    return {
        name,
        color,
        ribbon
    }
});

printCatsRibbon(catsFemaleMaleZip);







