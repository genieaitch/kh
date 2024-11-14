/*아이디 힌트*/
function id1(){
    const piResult = document.getElementById("hintId");
    
    piResult.style.display = "block";
}

function id2(){
    const piResult = document.getElementById("hintId");
    
    piResult.style.display = "none";
}
/*비밀번호 힌트*/
function pw1(){
    const ppResult = document.getElementById("hintPw");
    
    ppResult.style.display = "block";
}

function pw2(){
    const ppResult = document.getElementById("hintPw");
    
    ppResult.style.display = "none";
}
/*비밀번호 확인*/
function checkPw2(){
    const pw = document.getElementById("user-pw").value;
    const pw2 = document.getElementById("checkPw").value;
    const checkResult = document.getElementById("checkResult");

    if(pw === pw2){
        checkResult.innerText = "비밀번호가 일치합니다.";
        checkResult.className = "success-msg";
    } else{
        checkResult.innerText = "비밀번호가 일치하지 않습니다.";
        checkResult.className = "error-msg";
    }

    if(pw2.trim().length === 0){
        checkResult.innerText = "입력한 값이 없습니다."
    }
}
/*이름*/
function name2(){
    const name = document.getElementById("name").value;
    const nameResult = document.getElementById("nameResult");
    const nameRegex = /^[가-힇]{2,15}$/;

    if (nameRegex.test(name)){
        nameResult.innerText = "유효한 형식입니다.";
        nameResult.className = "success-msg";
    } else{
        nameResult.innerText = "이름은 한글 2-15자여야 합니다.";
        nameResult.className = "error-msg";
    }

    if (name.trim().length === 0)
        nameResult.innerText = "이름을 입력해 주세요.";
}
