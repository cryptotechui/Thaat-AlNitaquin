let PicturesData = [
    { name: 'الصورة الأولى', url: './Pictures/Picture1/Picture1.html' },
    { name: 'الصورة الثانيه', url: './Pictures/Picture2/Picture2.html' },
    { name: 'الصورة الثالثه', url: './Pictures/Picture3/Picture3.html' },
    { name: 'الصورة الرابعه', url: './Pictures/Picture4/Picture4html' },
    { name: 'الصورة الخامسه', url: './Pictures/Picture5/Picture5html' },
    { name: 'الصورة السادسه', url: './Pictures/Picture6/Picture6.html' },
    { name: 'الصورة السابعه', url: './Pictures/Picture7/Picture7.html' },
    { name: 'الصورة الثامنه', url: './Pictures/Picture8/Picture8.html' },
    { name: 'الصورة التاسعه', url: './Pictures/Picture9/Picture9.html' },
    { name: 'الصورة العاشره', url: './Pictures/Picture10/Picture10.html' }
];


let container = document.createElement("div");
container.id = "Picture-container";
document.body.appendChild(container);

function Pictures(name, url){
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

VideosData.forEach(Pictures => {
    Pictures(Pictures.name, Pictures.url);
});
