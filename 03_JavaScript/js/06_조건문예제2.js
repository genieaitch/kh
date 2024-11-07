function checkScore(){
    const score = document.getElementById("score").value;
    const msg = document.getElementById("scoreMsg");

    if(60<=score){
        msg.innerText="합격입니다.";
        msg.className="success";
    } else{
        msg.innerText="불합격입니다.";
        msg.className="fail";
    }
}
