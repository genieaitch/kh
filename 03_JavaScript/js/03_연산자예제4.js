//초기 값 설정하는 count 세팅

let count = 0; //const 값 변경이 안되기 때문에 사용X
const bd = document.getElementById("bd");


function 증가() {
    count += 1; //1씩 증가하게 만들기
    document.getElementById("count").innerText = count;
    bd.style.backgroundColor = (count % 2 == 0) ? "#f0f0f0":"#ffd1dc";
}

function 초기화() {
    count = 0;//감소와 증가 버튼 모두 count를 0으로 만들기
    document.getElementById("count").innerText = count;
    
    //일시적으로 초기화 버튼을 눌렀을 때 잠깐 0으로 숫자가 보이길 원한다면 아래와 같이 설정
    //document.getElementById("count").innerText = 0; = 눈속임
}

function 감소() {
    count -= 1;
    const cnt = document.getElementById("count")
    cnt.innerText = count;
    cnt.style.color = (count % 2 == 0) ? "orange" : "black";
}
