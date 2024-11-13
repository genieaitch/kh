function checkHobby(){
    const hobbyList = document.getElementsByName("hobby");
    const result = document.getElementById("result");

    let str = "";
    let count = 0;

    for(let i = 0; i < hobbyList.length; i++){
        if(hobbyList[i].checked){
            str += hobbyList[i].value + " ";
            count++;
        }
    }
        
        if(count > 0) {
            result.innerHTML = `${str}<br>선택된 취미 개수 : ${count}`;
        } else{
            result.innerHTML = `선택된 취미가 없습니다.`;
        }
    }

    //삼항 연산자로 표현
    /*
    const inText =
    count > 0
    ? (result.innerHTML = `${str}<br>선택된 취미 개수 : ${count}`)
    : (result.innerHTML = `선택된 취미가 없습니다.`)
    */
