document.body.style.margin = "0";

document.body.style.padding = "0";

document.body.style.width = "100%";

for(let i = 1; i<6; i++){
  let h3 = document.createElement("h3");

  h3.innerText = `Rad${i}`;

  document.body.appendChild(h3);
  h3.style.textAlign = "center";

  h3.style.fontSize = `${i}em`;
  h3.style.margin = "10px 0";

  h3.style.width = "100%";

  h3.style.color = "#cdb7f6"

  let hue = 120 + i *15;

  h3.style.backgroundColor = `hsl(${hue}, 50%, 80%)`

}

let box = document.createElement("div");

box.style.height = "500px";

box.style.border = "2px black solid"

box.style.margin = "auto";

box.style.display = "flex";

box.style.justifyContent = "space-evenly";

box.style.alignItems = "center";

  
document.body.appendChild(box);

let boxar = ["box1", "box2", "box3"]

for(let i = 0; i<boxar.length; i++){
  boxar[i] = document.createElement("div");

    
  boxar[i].style.width = "20%";

  boxar[i].style.height = "185px";

  boxar[i].style.border = "10px #cdb7f6 solid"

  box.appendChild(boxar[i]);

}

for(let i = 0; i < 10; i++){
  let p = document.createElement("p");
  p.innerText = i;
  p.style.margin = "0";
    
  if(i%2 == 0){
  p.style.backgroundColor = "black"
  p.style.color = "white";
    }

  if(i == 4){
    p.style.backgroundColor = "#cdb7f6"
    }

  boxar[0].appendChild(p);
}

for(let i = 9; i > -1; i--){
  let p = document.createElement("p");
  p.innerText = i;
  p.style.margin = "0";
    
  if(i%2 == 0){
  p.style.backgroundColor = "black"
  p.style.color = "white";
    }

  
  if(i == 8){
    p.style.backgroundColor = "#cdb7f6"
    }

  boxar[1].appendChild(p);
  boxar[1].style.textAlign = "center";
  
}

let array = ["ett","två","tre","fyra","fem","sex","sju","åtta","nio","tio",]

for(let i = 0; i < 10; i++){
  let p = document.createElement("p");
  p.innerText = array[i];
  p.style.margin = "0";
    
  if(i%2 == 0){
  p.style.backgroundColor = "black"
  p.style.color = "white";
    }

  if(array[i] == "sex"){
    p.style.backgroundColor = "#cdb7f6"
    }

  boxar[2].appendChild(p);
  boxar[2].style.textAlign = "end";
}


