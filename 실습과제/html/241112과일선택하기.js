function selectFruit(abc){
    const result = document.getElementById("result");
    /*const pick = 과일선택(abc);*/

/*
function 과일선택(abc){
        if(abc==="1"){
            return 사과;
            break;
        } else if(abc==="2"){
            return 오렌지;
        } else if(abc==="3"){
            return 바나나;
        } else if(abc==="4"){
            return 체리;
        } else if(abc==="5"){
            return 망고;
        }
    }
    */

        if (abc <= 1){
            switch(abc){
                case "1":
                    result.innerText = "선택한 과일 : 사과"
                    console.log("1번 사과 선택함")
                    break;
                case "2":
                    result.innerText = "선택한 과일 : 오렌지"
                    console.log("2번 오렌지 선택함")
                    break;
                case "3":
                    result.innerText = "선택한 과일 : 바나나"
                    console.log("3번 바나나 선택함")
                    break;
                case "4":
                    result.innerText = "선택한 과일 : 체리"
                    console.log("4번 체리 선택함")
                    break;
                case "5":
                    result.innerText = "선택한 과일 : 망고"
                    console.log("5번 망고 선택함")
                    break;
                default:
                    result.innerText = "숫자를 입력해 주세요!"
                    console.log("숫자 없음")
                    break;
            }
        } else {
            result.innerText = "숫자를 입력해 주세요!"
        }


        
}
