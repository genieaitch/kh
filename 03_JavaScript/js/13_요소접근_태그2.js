function bdBtn(){
    const bd = document.getElementsByTagName("body")[0];
    bd.style.backgroundColor = "lightblue"
    /*
    자바스크립트 입장에서는
    getElementsByTagName
    get = 가져오다
    Elements = 요소들(한개이상)
    ByTagName = 원하는 태그이름을 가져오는 것
    document.getElementsByTagName("body") = [body, ...];
    코드 안에 아무리 body 태그가 한 개 있다 하더라도 무조건 body 뒤에 [0] index가 0번째인 body를 가져온다고 표기
    */

    //body와 같은 태그는 TagName을 사용하지 않고 태그명으로 변경 간으
    document.body.style.backgroundColor = "orange";

    //CSS의경우 맨 마지막에 작성한 css 덮어쓰기
}
