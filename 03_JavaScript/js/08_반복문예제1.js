function check1(){
    let val; // undefined = 값 없음 상태
    //처음부터 변수명에 변수명에 특정 값을 설정하지 않고 나중에 값을 담기 해 값을 담기 위한 변수명만 선언

    //while문을 이용해서 취소를 누르기 전까지 반복
    //==취소를 누르면 반복하지 않겠다 설정
    //prompt 버튼 ┌확인 = 빈 값이 초기에 들어있음
    //            └취소 = null 값이 버튼 안에 들어있음
    while(val !== null){
        /*
        동일 비교 연산자
        !== → 값과 자료형이 모두 다른 경우 true
        === → 값과 자료형이 모두 같은 경우 true
        */

        val=prompt("입력 후 확인하기"); //변수에 prompt 값을 대입
        //확인 → 입력한 값
        //취소 → null 값

        alert(val + "값을 확인했습니다.")
    }
}

function check2(){
    let age; //들어있는 나이 숫자가 없음

    while(age !== null){
        age=prompt("나이를 입력하세요");

        if(age>=18){
            alert("성인입니다.");
        }else if(age>=13){
            alert("청소년입니다.")
        }else{
            alert("어린이입니다.")
        }
    }
}

function check3(){
    let fm;

    while(fm !== null){
        fm=prompt("성별을 입력하세요 (남자 or 여자)");

        if(fm=="여자"){
            alert("여자이군요!");
        }else if(fm=="남자"){
            alert("남자이군요!");
        }else{
            alert("잘못입력했습니다.");
        }
    }
}

/* 다른 방법으로 시도해보았는데 실행이 안됨
function check3(){
    let fm;

    while(fm !== null){
        fm=prompt("성별을 입력하세요");

        if(fm == 남, 남자, 남성){
            alert("남성으로 확인되었습니다.")
        }
        else if(fm == 여, 여자, 여성){
            alert("여성으로 확인되었습니다.")
        }else{
            alert("올바른 성별을 입력해주세요.")
        }
    }
}
*/
