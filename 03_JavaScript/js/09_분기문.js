/*break 확인*/

function check1() {
    //1부터 10까지 1씩 증가하다가 5가 되면 멈춤
    
    let result = 0;
    // 초기식 ; 조건식 ; 증감식
    for (let a = 1; a <= 10; a++){
        result += a;
        if(a==5){
            break;
            //break는 for문을 조건식에서 모든 숫자의 행동을 진행하다가 특정 숫자나 값이 보이면 for문을 모두 중단
            //for문에서 중단하기 전의 값을 저장한 상태로 탈출
        }
    }
    alert("합 : "+result)
}

function check2() {
    //1부터 20까지 모두 더하는 for문 작성
    //15에서 for문을 멈추고 15까지 더한 값을 출력
    let result = 0;

    /*빠르게 검산하는 방법(1~20)
    /첫 번째 숫자 + 마지막 숫자 = 21
    20/2(절반) = 10
    21*10 = 210
    1~10 = 11 10/2 = 5 11*5 =55
    */
    for(let b=1; b <=20; b++){
        result += b;
    if(b==15){
        break;
    }
}
alert("총 더한 값은 [" + result + "] 입니다.")
}

function check3() {
//1부터 20까지 출력 만약 3의 배수인 경우 멈추고 탈출하기

for(let abc=1; abc<=20; abc++){
    console.log("ABC의 값 : "+abc);
    if(abc%3==0){
        break;
    }
    console.log("ABC의 갑 ["+abc+"]")//순서가  break 뒤에 있어서 break걸린 후에 진행됐기 때문에 3은 안나옴
    }
}

function check4() {

}
function check5() {

}

function startGame(){
    
}
