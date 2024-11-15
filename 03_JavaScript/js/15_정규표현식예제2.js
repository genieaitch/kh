function checkEmail() {
    const userEmail = document.getElementById("user-email").value;
    const errorMsg = document.getElementById("error-msg");
    /*
    /^ = 정규식 시작 표기
    [a-zA-Z0-9.-_] = @(at)이 작성되기 전에 영어 소문자 대문자 숫자 특수문자(.-_) 포함해서 작성 ㅏㄱ능
    +@ = 앞에 작성한 아이디 표기 뒤에 무조건 @(at)가 뒤에 작성되어야함
    [a-zA-Z0-9.-] = @(at) 뒤에 회사명과 같은 도메인명이 작성되어야함
    +\. = 회사명(도메인명)이 작성된 후 무조건 뒤에 .(dot, period)이 붙어져야함
    [a-zA-Z] = . 뒤에 kr이나 com이나 하국과 같은 도메있도록 설정ㅇ
    {2,} 위 규칙을 모두 지키는 기준으로 최소 2자 이상 작성
    $/
    */
    const emailPattern = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //@는 기능이 이메일밖에 없어서 \를 안붙여줌

    if (!emailPattern.test(userEmail)) {
      errorMsg.style.display = "block";
    } else {
      errorMsg.style.display = "none";
    }
  }

  const userPhone = document.getElementById("user-phone");
  const errMsg = document.getElementById("err-msg");
  const phonePattern = /^010-\d{4}-\d{4}$/;
  //const phonePattern = /^010-[0-9]{4}-[0-9]{4}$/;

  function checkPhone(){
    if(!phonePattern.test(userPhone.value)){
      errMsg.style.display = "block";
    }
  }
