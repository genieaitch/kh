function checkPw(){
    const pw = document.getElementById("inputPw").value;
    const pwConfirm = document.getElementById("inputPwConfirm").value;

    const success = "비밀번호가 일치합니다.";
    const fail = "비밀번호가 일치하지 않습니다.";


    (pw == "pass1234!") && (pwConfirm == "pass1234!") ? alert(success) : alert(fail);
}

/*
모든 언어 통합 규칙

상수명, 변수명으로 true false 사용할 수 없음

const success
const fail
*/
