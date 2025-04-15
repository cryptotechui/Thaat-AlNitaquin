let ResearchData = [
    { name: 'البحث الأول', url: './Research/Research1.html' },
    { name: 'البحث الثاني', url: './Research/Research2.html' },
    { name: 'البحث الثالث', url: './Research/Research3.html' },
    { name: 'البحث الرابع', url: './Research/Research4.html' },
    { name: 'البحث الخامس', url: './Research/Research5.html' },
    { name: 'البحث السادس', url: './Research/Research6.html' },
    { name: 'البحث السابع', url: './Research/Research7.html' },
    { name: 'البحث الثامن', url: './Research/Research8.html' },
    { name: 'البحث التاسع', url: './Research/Research9.html' },
    { name: 'البحث العاشر', url: './Research/Research10.html' }
];


let container = document.createElement("div");
container.id = "Rsearch-container";
document.body.appendChild(container);

function Research(name, url){
    let body = document.getElementById("body") || document.body;
    let card = document.createElement("div");
    let title = document.createElement("h2");
    let head = document.createTextNode(name);
    
    title.appendChild(head);
    card.appendChild(title);
    container.appendChild(card);
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.flexWrap = "wrap";



    card.style.height = "300px";
    card.style.width = "258px";
    card.style.background = "#0fa40f";
    card.style.borderRadius = "10px";
    card.style.color = "#fff";
    card.style.padding = "10px";
    card.style.margin = "3px 15px";
    card.style.display = "inline-block";
    card.style.cursor = "pointer";
    card.style.display = "flex";
    card.style.justifyContent = "center";
    card.style.alignItems = "center";
    card.style.fontFamily = " Boldonse, system-ui";
    card.style.fontStyle = "normal";
    card.style.fontWeight = "300";



    card.onclick = () => window.location.href = url;


    body.style.background = "#f0f0f0";
}

VideosData.forEach(Research => {
    Research(Research.name, Research.url);
});
