function checkGrade(){
    const score = document.getElementById("inputScore").value;
    const msg = document.getElementById("gradeMsg");

    if(90<=score){
        msg.innerText="A";
        msg.className="A";
    } else if(80<=score){
        msg.innerText="B";
        msg.className="B";
    } else if(70<=score){
        msg.innerText="C";
        msg.className="C";
    } else if(60<=score){
        msg.innerText="D";
        msg.className="D";
    } else{
        msg.innerText="F";
        msg.className="F";
    }
    }
