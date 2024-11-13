function checkColor(){
    const colors = document.getElementsByName("색상");
    //input checkbox는 for문을 사용해서 사용자가 몇개를 체크했는지 확인하지만
    //input radio는 여러가지 선택지 중에 단 한가지만 선택해서 값을 넘겨주기 때문에 for문을 사용하지 않아도 됨

    document.getElementById("result").innerText = colors[0].value;
}
