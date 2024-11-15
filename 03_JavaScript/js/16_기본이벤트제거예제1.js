function agreeBtn(){
    const agree1 = document.getElementById("agree1").checked;
    const agree2 = document.getElementById("agree2").checked;
    const agree3 = document.getElementById("agree3").checked;
    
    const Agree = agree1 && agree2 && agree3;

    const signBtn = document.getElementById("signBtn");

    signBtn.disabled = !Agree;
}
