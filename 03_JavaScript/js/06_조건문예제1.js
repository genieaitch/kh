function checkAge(){
    const age = document.getElementById("age").value;
    const msg = document.getElementById("ageMsg");

    if(18<=age) {
        msg.innerText = "관람 가능합니다.";
        msg.className = "success";
        /*
        msg.style.color: "green"
        */

    } else{//18세 미만이라면 여기에 있는 글자 보이기
        msg.innerText = "18세 이상만 관람 가능합니다.";
        msg.className = "fail";
        //만약 파일명.css나 style 태그 안에 fail로 작성된 스타일이 없다면 스타일적용X

        /*******className과 style JS 속성 차이점 ***********/
        /*변수명.className = css 스타일 태그 안에 작성된 css 클래스 속성명 불로오기 실행
        불러온 스타일을 추가
        
        변수명.style.속성(배경색, 글자색, 폰트크기 등) 스타일 2순위
        변수명.className 보다 스타일 적용 우선순위가 높기 때문에 사용할 때 긴급한 상황이 아니면 사용 자제
        why? 변경될 수도 있기 때문에 변경하기 쉽도록

        조건문에서 변수명.className으로 시작했다면 다른 {} 안에도 className으로 맞춰줄 것!
        */
    }
}
