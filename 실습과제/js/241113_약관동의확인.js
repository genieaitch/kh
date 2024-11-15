const agree = document.getElementsByName("agree");
function ok(){
    
    const result = document.getElementById("result");
    const hobby = document.getElementsByName("hobby");

    let str = "";
    let count = 0;

    for(let i = 0; i <hobby.length; i++){
        if(hobby[i].checked){
            str += hobby[i].value;
            count++
        }
        result.innerHTML = `${str} <br> 선택된 취미 개수 : ${str.length}`;//값이 사라짐
    }

    /*
    if(count > 0){
        
    } else{
        alert("모든 필수 약관에 동의해주세요.")
    }
    
    */
}

function checkHobby(){
    const on = document.getElementsByClassName("on");
    if (agree.checked){
        on.style.display = "block"
    }
}
