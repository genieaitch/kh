function check1(){ //onclick = function
    /*
    for([1]초기식 ; [2]조건식 ; [4]증감식){
    [3] 조건식이 true인 경우 반복 수행할 코드}
    */
    /*for( )안에서 공간을 구분짓는 기준은 ;으로 구분짓는다.
    for(최초 1회만 어떤 값인지 보여지는 공강{};
        {}안에 들어가서 작성되어있는 코드를 실행할 수 있는 권한의 조건;
        더하거나 뺄값 ++ --)
        
        조건이 true일 때 실행할 공간*/
    
    /* for문 안에는 const(상수) 대신 let(변수)를 사용함 */


    //문자열 형식으로 모든 숫자 출력해서 숫자들이 모두 나왔는지 확인해보기

    let 결과 = ""; //빈 문제 제공

    //1~5까지 출력

    /*
    숫자++ ==> 숫자 = 숫자 +1;
    */

    for(let 숫자=1; 숫자<=5 ; 숫자++){

    결과+=숫자;
        console.log("결과:"+결과);
}

    console.log("======================");
    console.log("최종으로 출력되는 결과 값은");
    console.log(결과+"입니다.");
} 

/*1부터 10까지 연속 출력하는 숫자들 표기*/
function check2(){
    for(let a=1; a<=10; a++)
    console.log("1~10:"+a);
}

/*1부터 20까지 console.log 출력 */
function check3(){
    for(let a=1; a<=20; a++)
        console.log("1~20:"+a);
}

let 결과2 = "";
function check4(){
    for(let b=5; b<=15; b++){/*결과2라는 아무것도 들어있지 않은 변수에다가 숫자들을 누적시켜서 이어 붙여 출력*/
        결과2+=b;
        console.log("5~15:"+b); //b의 값이 바뀔 때 마다 15까지 모두 바뀌어서 출력
    }
    alert("총 값은" + 결과2 + "입니다")
}

/*
while 문 기본 구조
while (조건){
반복할 코드
}
*/

// while1 기능의 버튼을 누르면 1~5 숫자를 더한 값을 출력
function while1(){
    let num = 1; //let 변할 수 있는 변수명 작성/ const 변할 수 없는 상수명을 작성

    while(num <=5) {
        alert("num의 숫자값은" + num + "입니다.");
        //계속 num값이 1이기 때문에 무한 반복
        //num 숫자를 1씩 증가시켜서 숫자가 5가 되면 while문을 종료
        num++; // num = num+1; 숫자 증가
    }
/*
    while(조건이 true인 경우 설정) {
    조건이 true일 때 실행할 구문 작성
    }
    */
}

function while2(){
    let abc = 1;
    
    while(abc <= 10){
        console.log("==========while2의 버튼==========");
        console.log("abc의 값 : " + abc);  
        abc++;     
}}

function while3(){
    let abc = 1;
    while(abc <= 10){
        console.log("==========while3의 버튼==========");
        console.log("abc의 값 : " + abc);
        abc++;
    if(abc==5){
        break;
    }
}
}

//while4라는 지역변수 안에서만 사용하는 변수명을 설정할 경우에는 {}안에 변수명을 작성
// xyz 숫자 5를 확인
function while4(){
    let xyz = 0;
    while(xyz <= 20){
        xyz++;
        console.log(xyz);
    }
}

function while5(){
    let def = 5;
    while(def <= 20){
        console.log("==========while5   의 버튼==========");
        console.log("숫자는" + def + "입니다.");
        def++;
        if(def == 15){
            break; //숫자가 15가 되면 위에서 진행하던 코드 모두 중지
        }
    }
}
