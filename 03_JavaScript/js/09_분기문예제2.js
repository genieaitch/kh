/*let 변화가 가능한 값이기 때문에 변수명에 변수값을 넣지 않아도 가능하지만
const의 경우 상수라 값이 변하면 안되기 때문에 초기에 상수명과 상수명에 들어갈 상수값을 항시 같이 작성*/


function season(){
    let season;
    const result = document.getElementById("result")
    const body = document.getElementById("cssStyle")

    //innerText와 마찬가지로 배경색상 또한 색상 지정이 되긴 하지만 switch문이 while문으로 이동하는 속도가 더 빠르게 진행되기 때문에 사람의 눈에 보이기 전에 색상 초기화

    while(season !== null){
        season = prompt("월을 입력해 주세요.");

        switch(season){
            case "3": case "4": case "5":
                    result.innerText="봄을 선택하셨습니다.";
                    body.style.backgroundColor = "lightpink";
                    console.log("봄 선택함")
                    break;

                case "6": case "7": case "8":
                    result.innerText = "여름을 선택하셨습니다.";
                    body.style.backgroundColor = "lightyellow";
                    console.log("여름 선택함")
                    break;

                case "9": case "10": case "11":
                    result.innerText = "가을을 선택하셨습니다.";
                    body.style.backgroundColor = "sandybrown";
                    console.log("가을 선택함")
                    break;

                case "12": case "1": case "2":
                    result.innerText = "겨울을 선택하셨습니다.";
                    body.style.backgroundColor = "lightblue";
                    console.log("겨울 선택함")
                    break;

                case "종료":
                    result.innerText = "종료를 선택하셨습니다.";
                    body.style.backgroundColor = "white";
                    console.log("종료 선택함")
                    return;
                default:
                    result.innerText = "잘못된 선택입니다.";
                    body.style.backgroundColor = "white";
                    console.log("잘못선택함")
                    break;
        }
    }
}
