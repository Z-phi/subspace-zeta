var tech = [
    {
      "link":"charts/paradizm.html",
      "image":"images/chart-banners/paradizm-bn.png",
      "title":"Paradizm",
      "tags":["Heavy Tech", "Minijacks"]
    },
    {
      "link":"",
      "image":"images/chart-banners/Friends_Under_Coils-bn.png",
      "title":"Friends Under Coils",
      "tags":["Heavy Tech", "Trills"]
    },
    {
      "link":"",
      "image":"images/chart-banners/sangari7bn.png",
      "title":"Sangari 7",
      "tags":["Light Tech", "Holds"]
    },
    {
      "link":"",
      "image":"images/chart-banners/bn.png",
      "title":"Unplug",
      "tags":["Brutal Tech", "Minedodge"]
    },
    {
      "link":"",
      "image":"images/chart-banners/EZ_God_Library-bn.png",
      "title":"EZ God Library",
      "tags":["Light Tech", "Bursts"]
    },
    {
      "link":"",
      "image":"images/chart-banners/Matt_Silver-bn.png",
      "title":"Matt Silver",
      "tags":["Brutal Tech", "Chordjacks"]
    },
    {
      "link":"",
      "image":"images/chart-banners/bn-100.jpg",
      "title":"Blight Mamba",
      "tags":["Light Tech", "Light JS"]
    },
    {
      "link":"",
      "image":"images/chart-banners/fbn.png",
      "title":"Flowering Night",
      "tags":["Speed", "Heavy Tech"]
    },
    {
      "link":"",
      "image":"images/chart-banners/Terrace-bn.png",
      "title":"Terrace",
      "tags":["Light Tech", "Light JS"]
    },
    {
      "link":"",
      "image":"images/chart-banners/parallel.png",
      "title":"Parallel Skydive",
      "tags":["Light Tech", "Minijacks"]
    },
    {
      "link":"",
      "image":"images/chart-banners/tdw_bn.jpg",
      "title":"The Dark World",
      "tags":["Jumpgluts", "Light Tech"]
    },
    {
      "link":"",
      "image":"images/chart-banners/undici-bn.jpg",
      "title":"UNDICI",
      "tags":["Speed", "Heavy Tech"]
    },
    {
      "link":"",
      "image":"images/chart-banners/musiceater_BN.png",
      "title":"UR+ MusicEater LV99",
      "tags":["Heavy Tech", "Bursts"]
    },
    {
      "link":"",
      "image":"images/chart-banners/Snare_As_Weapon_BN.png",
      "title":"Snare As Weapon",
      "tags":["Heavy JS", "Light Tech"]
    },
    {
      "link":"",
      "image":"images/chart-banners/nobanner.png",
      "title":"-160",
      "tags":["Brutal Tech", "Minedodge"]
    },
    {
      "link":"",
      "image":"images/chart-banners/nobanner.png",
      "title":"Tie My Rope",
      "tags":["Jackspeed", "Heavy Tech"]
    },
    {
      "link":"",
      "image":"images/chart-banners/nobanner.png",
      "title":"Break The Targets",
      "tags":["Minijacks", "Light Tech"]
    },
    {
      "link":"",
      "image":"images/chart-banners/nobanner.png",
      "title":"Mysterious Wall",
      "tags":["Light Tech", "Graces"]
    },
    {
      "link":"",
      "image":"images/chart-banners/nobanner.png",
      "title":"Mining Melancholy",
      "tags":["Light Tech", "Holds"]
    },
];
  
var dump = [
    {
      "link":"",
      "image":"images/chart-banners/i-want-you.png",
      "title":"I Want You",
      "tags":["Anchors", "Jumpgluts"]
    },
    {
      "link":"",
      "image":"images/chart-banners/20-november.png",
      "title":"20,november",
      "tags":["Anchors", "Minijacks"]
    },
    {
      "link":"",
      "image":"images/chart-banners/malt-liquor.png",
      "title":"Malt Liquor",
      "tags":["Heavy Tech", "Polyrhythms"]
    },
    {
      "link":"",
      "image":"images/chart-banners/aulture.png",
      "title":"Aulture",
      "tags":["Heavy Tech", "Minijacks"]
    },
    {
      "link":"",
      "image":"images/chart-banners/crests.png",
      "title":"Crests of Waves",
      "tags":["Anchors", "Light Tech"]
    },
    {
      "link":"",
      "image":"images/chart-banners/cake-by.png",
      "title":"Cake By The Ocean",
      "tags":["Heavy Tech", "Light JS"]
    },
    {
      "link":"",
      "image":"images/chart-banners/hdl.png",
      "title":"H.D.L.",
      "tags":["Anchors", "Heavy JS"]
    },
    {
      "link":"",
      "image":"images/chart-banners/fun-tonight.png",
      "title":"Fun Tonight",
      "tags":["Light Tech", "Jacks"]
    },
    {
      "link":"",
      "image":"images/chart-banners/subterranean.png",
      "title":"Subterranean Blastoff",
      "tags":["Heavy JS", "Speed"]
    },
    {
      "link":"",
      "image":"images/chart-banners/trouble-maker.png",
      "title":"Trouble Maker",
      "tags":["Anchors", "Light Tech"]
    },
    {
      "link":"",
      "image":"images/chart-banners/cata.png",
      "title":"Catarixir",
      "tags":["Minijacks", "Bursts"]
    },
    {
      "link":"",
      "image":"images/chart-banners/volcanic.png",
      "title":"Volcanic Rim Stage",
      "tags":["Chordjacks", "Brutal Tech"]
    },
    {
      "link":"",
      "image":"images/chart-banners/nobanner.png",
      "title":"Rinkaku",
      "tags":["Anchors", "Heavy Tech"]
    },
    {
      "link":"",
      "image":"images/chart-banners/nobanner.png",
      "title":"Ruti'n",
      "tags":["Jumpgluts", "Light Tech"]
    },
];
  
var charts = [
    {
      "link":"",
      "image":"images/chart-banners/kara-toprak.png",
      "title":"Kara Toprak",
      "tags":["One Handed", "Heavy Tech"]
    },
    {
      "link":"",
      "image":"images/chart-banners/nobanner.png",
      "title":"Peer Gynt",
      "tags":["Chordstream", "Light Tech"]
    },
];
  
var index = 1;
  
var swap = function(forward){
    if(forward){
        index = (index + 1) % 3;
    } else{
        index = index - 1;
        index = index == -1 ? 2 : index;
    }

    var table = document.getElementById("charts");
    while(table.children.length > 1){
        table.removeChild(table.lastChild);
    }

    var chosenArray;

    switch(index){
        case 0:
            chosenArray = tech;
            document.getElementById("type").innerHTML="4K Technical";
            break;
        case 1:
            chosenArray = dump;
            document.getElementById("type").innerHTML="4K Dump"
            break;
        case 2:
            chosenArray = charts;
            document.getElementById("type").innerHTML="6K Charts"
            break;
        default: break;
    }
  // debugger;

    for(let i = 0; i < chosenArray.length; i++){
        var tableRowElement = document.createElement("tr");
        var imageColumn = document.createElement("td");
        var titleColumn = document.createElement("td");
        var tagColumn = document.createElement("td");

        var imageLink = document.createElement("a");
        imageLink.href = chosenArray[i].link;
        var imageTag = document.createElement("img");
        imageTag.src = chosenArray[i].image;
        imageTag.width = 235;
        imageLink.appendChild(imageTag);
        if(chosenArray[i] === ""){
            imageColumn.appendChild(imageTag);
        } else{
            imageColumn.appendChild(imageLink);
        }

        var bold = document.createElement("strong");
        var boldedText = document.createTextNode(chosenArray[i].title);
        bold.appendChild(boldedText);
        titleColumn.appendChild(bold);

        for(let j = 0; j < chosenArray[i].tags.length; j++){
            var tag = document.createTextNode(chosenArray[i].tags[j]);
            tagColumn.appendChild(tag);
            if(j != chosenArray[i].tags.length - 1){
                tagColumn.appendChild(document.createElement("br"));
            }
        }

        tableRowElement.appendChild(imageColumn);
        tableRowElement.appendChild(titleColumn);
        tableRowElement.appendChild(tagColumn);
        table.appendChild(tableRowElement);
    }
}