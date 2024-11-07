// document.get~ 특정 아이디나 태그나 클래스명을 가져오는 설정은 맨 위에 작성 시작, 단 value제외


const inputId =document.getElementById("inputId");
const inputPw =document.getElementById("inputPw");

function login(){
    const id = inputId.value;//소비자가 작성한 아이디 값 최종적으로 가져오기
    const pw = inputPw.value;//소비자가 작성한 비밀번호 값 최종적으로 가져오기

    const success ="로그인 성공!";
    const fail = "아이디 또는 비밀번호가 일치하지 않습니다.";

    //     A          &&       B          ?     모두 일치할 때     : 하나라도 일치 하지 않을 때
    ("member01" == id) && ("pass01" == pw) ? alert(success) : alert(fail);
}

function checkNumber(){
    const pn = document.getElementById("phone").value;
    const tn = document.getElementById("tel").value;
    const msg = document.getElementById("msg");

    //삼항 연산자로 입력 여부를 확인 한 후 메시지 표시 또는 메시지 숨기기
    (pn || tn) ? (msg.style.display = "none"): (msg.style.display = "block");
}


