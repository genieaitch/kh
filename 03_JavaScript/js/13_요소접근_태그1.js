/*태그명으로 요소 접근하기*/
//HTML 문서(document)에 존재하는 모든 li 태그 요소를 얻어와 배열로 묶어서 변환


function tagNameTest(){
    const tagList = document.getElementsByTagName("li");
    // ul 태그안에 작성된 li 요소들을 모두 가져온다는 의미
    // 1개 이상 가져온다는 의미이기 때문에 1개만 가져올 때도 사용 가능
    
    //alert(tagList[0].innerText); → li 0번째는 red가 작성되어있는 것을 확인
    //태그 안에 작성된 요소값들은 모두 기본적으로 "" 로 감싸져있어서 따옴표를 사용하지 않아도 됨
    tagList[0].style.backgroundColor = tagList[0].innerText;
    tagList[1].style.backgroundColor = tagList[1].innerText;
    tagList[2].style.backgroundColor = tagList[2].innerText;
    tagList[3].style.backgroundColor = tagList[3].innerText;
    // li 태그는 0부터 3까지만 존재 li태그가 4개이상 존재하지 않기 때문에
    // 여기서부터 일시 정지가 되어 모든 동작을 멈춘 것
    tagList[4].style.backgroundColor = tagList[4].innerText;//에러
    //tagList[4].style.backgroundColor = tagList[4].innerText; 밑으로는 진행 X

    //<body>와 같은 기본적인 태그들은 따로 id나 class를 작성하지 않아도 접근 가능
    /*document.body.style.backgroundColor = "lightblue";*/

    //body 태그는 HTMLCollection 형태로 반환되기 때문에
    const bd = document.getElementsByTagName("body")[0];
    bd.style.backgroundColor = "lightblue";
}
