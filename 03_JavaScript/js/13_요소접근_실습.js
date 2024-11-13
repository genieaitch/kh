function changeColor(){
    const bg = document.getElementById("title");

    bg.style.color = "green";
}

function textBold(){
    const h2 = document.getElementsByClassName("text");
  
    h2.className = "highlighted";
}

function checkName(){
    const name = document.getElementsByName("user-name");
    const output = document.getElementById("nameOutput");
    const input = document.getElementById("input");

    output.innerText = name;
    input.value = "";
}

