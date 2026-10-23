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

if(!localStorage.length){
    localStorage.setItem("demands" , JSON.stringify(demands));
}


function validateForm(){
    probleme.classList.remove("border-[red]");
    desc.classList.remove("border-[red]");
    category.classList.remove("border-[red]");
    if(probleme.value == ""){
        probleme.classList.add("border-[red]");
        return 0;
    }else if(category.value == ""){
        category.classList.add("border-[red]");
        return 0;
    }else if(priority.value == ""){
        priority.classList.add("border-[red]");
        return 0;
    }else if(desc.value == ""){
        desc.classList.add("border-[red]");
        return 0;
    }
    return 1;
}

function addArticle(){
    if(!validateForm()){
        return 
    }

    let demand = {};
    demand.id = ++id;
    demand.probleme = probleme.value;
    demand.category = category.value;
    demand.priority = priority.value;
    demand.desc = desc.value;
    demands.push(demand);
    
    localStorage.setItem("demands" , JSON.stringify(demands));


    probleme.value = "";
    category.value = "";
    priority.value = "";
    desc.value = "";
}


btn.addEventListener("click", (e) => {
    e.preventDefault();
    addArticle();
    showArticle();
    
})


function showArticle() {
    demands = JSON.parse(localStorage.getItem("demands"));
    cards.textContent = "";
    console.log(demands);
    
    demands.forEach((demand) => {

        const article = document.createElement("article");
        article.className = "p-5 bg-white rounded-lg";

        const firstDiv = document.createElement("div");
        firstDiv.className = "flex justify-between items-center mb-5";

        const secondDiv = document.createElement("div");
        secondDiv.className = "leading-[28px] pb-4 border-b-2 border-[#EDF0F3]";

        const thirdDiv = document.createElement("div");
        thirdDiv.className = "mt-5 text-[12px] flex justify-end gap-4";

        article.append(firstDiv, secondDiv, thirdDiv);

        //First div
        // Icon
        const icon = document.createElement("i");
        icon.className ="fa-regular fa-square-plus bg-[#bbc0c5] p-3 text-[#5C697B] rounded-lg";
        // ID
        const idP = document.createElement("p");
        idP.className = "text-[#8290A2] text-[10px]";
        idP.textContent = `HD-${String(demand.id).padStart(3, "0")}`;
        firstDiv.append(icon, idP);

        //second div
        // Problem title
        const problemeH4 = document.createElement("h4");
        problemeH4.className = "font-bold";
        problemeH4.textContent = demand.probleme;
        // Description
        const descP = document.createElement("p");
        descP.className = "text-[11px] text-[#8290A2]";
        descP.textContent = demand.desc;
        // Category and priority container
        const secondDiv_1 = document.createElement("div");
        secondDiv_1.className = "mt-5 flex gap-5";
        // Category
        const categoryP = document.createElement("p");
        categoryP.className = "bg-[#bbc0c5] text-[#5C697B] px-2 pr-4 text-[9px] rounded-xl font-bold";
        categoryP.textContent = demand.category;
        // Priority
        const priorityP = document.createElement("p");
        priorityP.textContent = demand.priority
        priorityP.className = prioritySwitch(demand.priority)
        secondDiv_1.append(categoryP, priorityP);
        secondDiv.append(problemeH4, descP, secondDiv_1);

        //third div
        // Edit button
        const editBtn = document.createElement("button");
        editBtn.className = "text-[#5C697B] font-bold btnModifier";
        editBtn.textContent = "✎ Modifier";
        editBtn.addEventListener("click", ()=>{
            Modifier(demand)
        })
        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "text-[#CC626A] font-bold";
        deleteBtn.textContent = "♜ Supprimer";
        deleteBtn.addEventListener("click", () => {
            deleteArticle(demand.id);
        });
        thirdDiv.append(editBtn, deleteBtn);


        cards.append(article);

    });
    console.log(demands)
    demandNumber.textContent = `${demands.length} demands` ;
}



