const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const result = document.getElementById("res")

console.log("=====연산 기능 전=====");
console.log("더하기 결과: "+add);
console.log("곱하기 결과: "+mul);
console.log("빼기 결과: "+mul);



function calc(){
    result.innerText = n1.value > n2.value ? "첫 번째 숫자가 더 큽니다." : "두 번째 숫자가 더 크거나 같습니다.";
    result.style.color = n1.value > n2.value ? "lightblue" : "lightpink";

    result.innerText = "더하기 결과: " + add + "\n" ;

    const add = n1.value+n2.value;
    const mul = n1.value*n2.value;
    const sub = n1.value-n2.value;
    console.log("=====연산 기능 후=====");
    console.log("더하기 결과: "+add);
    console.log("곱하기 결과: "+mul);
    console.log("빼기 결과: "+mul);
}
/*
const add = n1.value+n2.value;
const mul = n1.value*n2.value;
const sub = n1.value-n2.value;
*/
