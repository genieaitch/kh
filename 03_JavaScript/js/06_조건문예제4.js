function checkGrade(){
    const score = document.getElementById("inputScore").value;
    const msg = document.getElementById("gradeMsg");

    msg.innerText="성적 : ";
    if(90<=score){//+= 글자 이어붙이기
        msg.innerText+="A"; //성적 : 이라는 글자에 A라는 글자를 이어붙여 출력
        msg.className="A";//대 소문자 구분을 하기 때문에 명확하게 작성
    } else if(80<=score){
        msg.innerText+="B";
        msg.className="B";
    } else if(70<=score){
        msg.innerText+="C";
        msg.className="C";
    } else if(60<=score){
        msg.innerText+="D";
        msg.className="D";
    } else{
        msg.innerText+="F";
        msg.className="F";
    }
    }
