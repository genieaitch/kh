function pickFruit() {
    const result = document.getElementById("result");
    const fruits = ["사과","오렌지","바나나","체리","망고","포도","딸기","파인애플","블루베리","복숭아"];
    
    
    
    console.log("총 과일의 갯수 : " + fruits.length);

    console.log("index 5 위치한 과일 : " + fruits[5]);
    
    //floor를 주로 쓰는 이유는 숫자가 5까지 있는데 실수로 5.5가 나왔을 때 6으로 반올림되거나 올림되면 빈 값이 출력되기 때문
    const randomIndex = Math.floor(Math.random() * fruits.length);
    const randomFruit = fruits[randomIndex];

    result.innerText = "랜덤으로 뽑힌 과일 :" + randomFruit;
    
    /*******TIP*********/
    //큰 따옴표나 작은따옴표로 문자열과 변수명을 구분짓지 않고 한번에 작성하는 방법
    //역따옴표는 문자열과 변수명을 모두 한 번에 작성하는 방법
    //변수명에는 ${변수명} 으로 표기를 하면 위에 있는 변수명으로 표기;
    result.innerText = `랜덤으로 뽑힌 과일 : ${randomFruit}`;

}
