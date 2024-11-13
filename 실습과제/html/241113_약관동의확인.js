function ok(){
    const agree = document.getElementsByName("agree");
    const result = document.getElementById("result");
    const hobby = document.getElementsByName("hobby");

    let str = "";
    let count = 0;

    for(let i = 0; i <hobby.length; i++){
        if(hobby[i].checked){
            str += hobby[i].value;
            count++
        }
        result.innerHTML = `${str} <br> 선택된 취미 개수 : ${str.length}`;
    }
    /*
    if(count > 0){
        
    } else{
        alert("모든 필수 약관에 동의해주세요.")
    }
    
    */
}
