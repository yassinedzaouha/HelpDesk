let demands = [
    {id:1, probleme: "Connexion Wi-Fi instable", category:"Réseau" , priority:"Haute" ,desc:"Le réseau se déconnecte régulièrement."},
    {id:2, probleme: "Installation d’un logiciel", category:"Logiciel" , priority:"Normale" ,desc:"Installer un logiciel sur le poste.  "},
    {id:3, probleme: "Clavier défectueux", category:"Matériel" , priority:"Basse" ,desc:"Certaines touches ne fonctionnent plus."}
];


let id = 3;
let id_demand_modify = 0;

let probleme = document.getElementById("probleme");
let category = document.getElementById("category");
let priority = document.getElementById("priority");
let desc = document.getElementById("description");
let btn = document.getElementById("submit");
let modifyBtn = document.getElementById("modify");
let cards = document.getElementById("cards");
let demandNumber = document.getElementById("demandNmber");
let table = document.getElementById("table_section");
let cards_btn = document.getElementById("cards_btn");
let table_btn = document.getElementById("table_btn");

if(!localStorage.length){
    localStorage.setItem("demands" , JSON.stringify(demands));
}

showArticle()

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

modifyBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    editArticle(id_demand_modify);
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
    

function prioritySwitch(prio){
    let style = "";
    
    switch(prio) {
        case "Haute":
            style = "bg-[#FFF0E8] text-[#BA6444] px-2 pr-4 text-[9px] rounded-xl font-bold";
            break;
        case "Normale":
            style = "bg-[#FFF5DF] text-[#A67A2B] px-2 pr-4 text-[9px] rounded-xl font-bold";
            break;
        case "Basse": 
            style = "bg-[#E8F6EE] text-[#388867] px-2 pr-4 text-[9px] rounded-xl font-bold";
            break;
        default :
            style = "";
    }
    return style;
}

function Modifier(demand){
    probleme.value = demand.probleme
    category.value = demand.category
    priority.value = demand.priority
    desc.value = demand.desc

    id_demand_modify = demand.id
    btn.classList.add("hidden");
    modifyBtn.classList.remove("hidden");
}

function editArticle(id){
    if(!validateForm()){
        return ;
    }
    for(let i=0;i<demands.length;i++) {
        if(id == demands[i].id){
            demands[i].probleme = probleme.value;
            demands[i].category = category.value;
            demands[i].priority = priority.value;
            demands[i].desc = desc.value;
            break;
        }
    }
     localStorage.setItem("demands" , JSON.stringify(demands));
    editId = 0;
    btn.classList.remove("hidden");
    modifyBtn.classList.add("hidden");

    probleme.value = "";
    category.value = "";
    priority.value = "";
    desc.value = "";
}


function deleteArticle(id) {
    demands = demands.filter((demand) => demand.id != id);
    localStorage.setItem("demands", JSON.stringify(demands));
    demandNumber.textContent = `${demands.length} demands`;
    showArticle();
}


