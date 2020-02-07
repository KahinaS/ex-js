import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from "jquery";
import "popper.js";



let membresDeLaFamille = [{
        name: "Jean",
        age: 29,
        jambes: 1
    },
    {
        name: "Tim",
        jambes: 2,
        age: 55
    },
    {
        name: "Zoé",
        jambes: 2,
        age: 11
    },
    {
        name: "Marie-Lou",
        jambes: 2,
        age: 25
    },
    {
        name: "Bernard",
        jambes: 2,
        age: 11
    },
];

document.getElementsByTagName('body')[0].innerHTML += '<table id="kaka"class="table table-bordered table-dark"><thead id="head"><tr> <th scope="col">Nom</th><th scope="col">Age</th><th scope="col">Jambes</th></tr></thead><tbody id="membres"></tbody></table>';

for (let i = 0; i < membresDeLaFamille.length; i++) {
    document.getElementById('membres').innerHTML += '<tr id="tab' + i + '"></tr>';
    document.getElementById('tab' + i).innerHTML += ' <td>' + membresDeLaFamille[i].name + '</td> <td>' + membresDeLaFamille[i].age + '</td> <td>' + membresDeLaFamille[i].jambes + '</td>';


}


let motRecherche = document.getElementById('kiki');
let kaka = document.getElementById("kaka");

function nomList() {
    let resultatRecherche = membresDeLaFamille.filter(personne => personne.name.includes(motRecherche.value));
    kaka.innerHTML = "<tr><th>Nom</th><th>Age</th><th>Jambes</th>";
    for (let i = 0; i < resultatRecherche.length; i++) {

        kaka.innerHTML += '<tr><td>' + resultatRecherche[i].name + '</td> <td>' + resultatRecherche[i].age + '</td> <td>' + resultatRecherche[i].jambes + '</td></tr>';
    }
}
motRecherche.oninput = nomList;







document.getElementsByTagName('body')[0].innerHTML += ' <select class="custom-select mr-sm-2" id="selecteur"><option selected value="">Choose...</option><option value="name">Nom</option><option value="age">Age</option><option value="jambes">Jambes</option></select>';

let selecteur= document.getElementById("selecteur");
function selection() { 
    let membreclef = selecteur.options[selecteur.selectedIndex].value;
    let trouver =  membresDeLaFamille.map(membre => membre[membreclef]);
  document.getElementsByTagName('body')[0].innerHTML += (trouver);
  console.log('lol');
} 
selecteur.addEventListener('change', selection); 
   // selecteur.onchange = selection; 

    // if (selecteur.value === "") {
    //     document.getElementsByTagName('body')[0].innerHTML += '<table id="kaka"class="table table-bordered table-dark"><thead id="head"><tr> <th scope="col">Nom</th><th scope="col">Age</th><th scope="col">Jambes</th></tr></thead><tbody id="membres"></tbody></table>';
    //     for (let i = 0; i < membresDeLaFamille.length; i++) {
    //         document.getElementById('membres').innerHTML = '<tr id="tab' + i + '"></tr>';
    //         document.getElementById('tab' + i).innerHTML += ' <td>' + membresDeLaFamille[i].name + '</td> <td>' + membresDeLaFamille[i].age + '</td> <td>' + membresDeLaFamille[i].jambes + '</td>';
    //     }
    // }
    // else if(selecteur.value === "1") {
    //     kaka.innerHTML = '<thead id="head"><tr> <th scope="col">Nom</th></tr></thead><tbody id="membres"></tbody>';
    
    //     for (let i = 0; i < membresDeLaFamille.length; i++) {
    //         kaka.innerHTML ="";
    //         document.getElementById('membres').innerHTML += '<tr id="tab' + i + '"></tr>';
    //         document.getElementById('tab' + i).innerHTML += ' <td>' + membresDeLaFamille[i].name + '</td>';
        
    //     }
    


//selecteur.onchange = selection;




// const result = membresDeLaFamille.filter(membre => membre.jambes === 1);

//  function unijambe(membre) {
//      return membre.jambes === 1;
//  }

// console.log(result);


// const map1 = membresDeLaFamille.map(x => x.name);

// console.log(map1);
// const found = membresDeLaFamille.find(element => element.jambes === 1);
// console.log(found);

// const kiki = membresDeLaFamille.find(z => z.name.includes("-"));
// console.log(kiki)

// const even = grandPetit => grandPetit.age < 30 && grandPetit.age > 20;
// console.log(membresDeLaFamille.some(even));

// const isBelowThreshold = (currentValue) => currentValue.jambes < 2;
// console.log(membresDeLaFamille.every(isBelowThreshold));

// const reducer = ( accumulator ,currentValue) => accumulator + currentValue.age;
// console.log(membresDeLaFamille.reduce(reducer,0));

//const reducer1 = membresDeLaFamille.reduce(function (accumulator, h)) {
//  accumulator[h.name] = h.age;
//return accumulator;
//}, {});
//console.log(reducer1)
