let VideosData = [
    { name: 'المقطع الأول', url: './Videos/Video1/Video1.html' },
    { name: 'المقطع الثاني', url: './Videos/Video2/Video2.html' },
    { name: 'المقطع الثالث', url: './Videos/Video3/Video3.html' },
    { name: 'المقطع الرابع', url: './Videos/Video4/Video4.html' },
    { name: 'المقطع الخامس', url: './Videos/Video5/Video5.html' },
    { name: 'المقطع السادس', url: './Videos/Video6/Video6.html' },
    { name: 'المقطع السابع', url: './Videos/Video7/Video7.html' },
    { name: 'المقطع الثامن', url: './Videos/Video8/Video8.html' },
    { name: 'المقطع التاسع', url: './Videos/Video9/Video9.html' },
    { name: 'المقطع العاشر', url: './Videos/Video10/Video10.html' }
];


let container = document.createElement("div");
container.id = "video-container";
document.body.appendChild(container);

function videos(name, url){
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

VideosData.forEach(video => {
    videos(video.name, video.url);
});
