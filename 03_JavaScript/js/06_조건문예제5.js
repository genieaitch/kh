function checkSeason() {
    const month = document.getElementById("month").value;
    const msg = document.getElementById("seasonMsg");


    if (3<=month && 5>=month){
        msg.innerText ="봄입니다.";
        msg.className ="spring";
    } else if(6<=month && 8>=month){
        msg.innerText ="여름입니다.";
        msg.className ="summer";
    } else if(9<=month && 11>=month){
        msg.innerText ="가을입니다.";
        msg.className ="fall";
    } else if(month == 12 || month == 1 || month == 2){
        msg.innerText ="겨울입니다.";
        msg.className ="winter";
    } else{
        msg.innerText ="잘못입력했습니다.(1~12월 내로 입력)";
        msg.className ="else";
}
}
