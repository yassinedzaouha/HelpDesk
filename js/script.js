let data = [
    {id:1, probleme: "Connexion Wi-Fi instable", category:"Réseau" , priority:"Haute" ,desc:"Le réseau se déconnecte régulièrement."},
    {id:2, probleme: "Installation d’un logiciel", category:"Logiciel" , priority:"Normale" ,desc:"Installer un logiciel sur le poste.  "},
    {id:3, probleme: "Clavier défectueux", category:"Matériel" , priority:"Basse" ,desc:"Certaines touches ne fonctionnent plus."}
];


let id = 3;


let probleme = document.getElementById("probleme");
let category = document.getElementById("category");
let priority = document.getElementById("priority");
let desc = document.getElementById("description");
let btn = document.getElementById("submit");
let cards = document.getElementById("cards");
let domandNumber = document.getElementById("domandeNmber");

// localStorage.setItem("demands" , JSON.stringify(data));

// showArticle()


function addArticle(){
    if(!validateForm()){
        return 
    }

    let dommande = {};
    dommande.id = ++id;
    dommande.probleme = probleme.value;
    dommande.category = category.value;
    dommande.priority = priority.value;
    dommande.desc = desc.value;
    data.push(dommande);
    localStorage.setItem("demands" , JSON.stringify(data));
}


