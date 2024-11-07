function check4(){
    const age = document.getElementById("inputAge").value;
   
    if(0<=age && age<=13){//13세 이하 어린이
        alert("어린이 입니다.")
    } else if(19<=age && age<=120){//19세 이상이라면 성인
        alert("성인입니다.")
    } else if(14<=age && age<=18){//19세 이상이라면 성인
        alert("청소년입니다.")
    } else{
        alert("잘못입력했습니다.")
    }
}
