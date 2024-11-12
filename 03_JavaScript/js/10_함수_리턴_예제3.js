function menuPrice(abc){
    if(abc === "비빔밥"){ // '' "" 구분 없음
        return 8000;
    } else if(abc === "김치찌개"){
        return 7000;
    } else if(abc === "된장찌개"){
        return 7000;
    } else{
        return 0;
    }
}

function menu(abc){
    const result = document.getElementById("result");
    const price = menuPrice(abc);

    if(price > 0){
        result.innerText = abc + " 주문이 완료 되었습니다. 가격은" + price + "입니다";
    } else{
        result.innerText = "재료가 소진되었습니다. 다른 메뉴를 선택해 주세요."
    }
}
