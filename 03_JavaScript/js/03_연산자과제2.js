const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");
const Mp = document.getElementById("inputMp");
const Tp = document.getElementById("inputTp");
const msg = document.getElementById("msg");


function singUp(){
    (Mp.value || Tp.value) ? (msg.style.display = "none") : (msg.style.display = "block");
}

function login(){
    const Id = inputId.value;
    const Pw = inputPw.value;

    const success = "로그인 성공!";
    const fail = "로그인 실패!";

    ("khtzzang" == Id) && ("kht1004" == Pw) ? alert(success) : alert(fail);
}
