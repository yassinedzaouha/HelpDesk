const data = [
    {id:1, probleme: "Connexion Wi-Fi instable", category:"Réseau" , priority:"Haute" ,desc:"Le réseau se déconnecte régulièrement."},
    {id:2, probleme: "Installation d’un logiciel", category:"Logiciel" , priority:"Normale" ,desc:"Installer un logiciel sur le poste.  "},
    {id:3, probleme: "Clavier défectueux", category:"Matériel" , priority:"Basse" ,desc:"Certaines touches ne fonctionnent plus."}
];

let id = 3;

let probleme = document.getElementById("probleme").value
let category = document.getElementById("category").value
let priority = document.getElementById("priority").value
let desc = document.getElementById("description").value
let btn = document.getElementById("submit")

function addArticle(){
    let article = document.createElement("article");
    article.classList.add("p-5 bg-white rounded-lg");
}


btn.addEventListener("click", (e) => {
    e.preventDefault();
    
})



